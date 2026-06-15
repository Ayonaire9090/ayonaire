"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Settings,
  Maximize,
  Minimize,
  List,
  FileText,
  Folder,
  ArrowLeft,
  ArrowRight,
  PictureInPicture,
} from "lucide-react";

interface LessonVideoPlayerProps {
  onOpenChapters?: () => void;
}

export const LessonVideoPlayer = ({ onOpenChapters }: LessonVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);

  // Format time (e.g., 12:45)
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const skip = (amount: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const togglePiP = async () => {
    if (videoRef.current) {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await videoRef.current.requestPictureInPicture();
        }
      } catch (error) {
        console.error("PiP error", error);
      }
    }
  };

  const cyclePlaybackRate = () => {
    if (videoRef.current) {
      const rates = [1, 1.25, 1.5, 2];
      const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
      videoRef.current.playbackRate = nextRate;
      setPlaybackRate(nextRate);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsBuffering(true);
    const onPlaying = () => setIsBuffering(false);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Auto-hide controls after 3 seconds of inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const resetTimer = () => {
      setShowControls(true);
      clearTimeout(timeout);
      if (isPlaying) {
        timeout = setTimeout(() => setShowControls(false), 3000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", resetTimer);
      container.addEventListener("mouseleave", () => {
        if (isPlaying) setShowControls(false);
      });
    }

    resetTimer();

    return () => {
      if (container) {
        container.removeEventListener("mousemove", resetTimer);
        container.removeEventListener("mouseleave", () => {
          if (isPlaying) setShowControls(false);
        });
      }
      clearTimeout(timeout);
    };
  }, [isPlaying]);

  return (
    <div className="relative w-full bg-black flex items-center justify-center group">
      {/* Side Navigation Buttons */}
      <button className="absolute left-2 lg:left-8 z-10 p-2 lg:p-3 bg-[#F86432] text-white rounded-md hover:bg-[#E55A2B] transition shadow-lg opacity-0 group-hover:opacity-100 disabled:opacity-50">
        <ArrowLeft size={20} />
      </button>

      <div
        ref={containerRef}
        className="relative w-full max-w-6xl aspect-video lg:max-h-[400px] bg-black overflow-hidden shadow-2xl flex flex-col"
      >
        <video
          ref={videoRef}
          src="/assets/videos/learning-tips-demo.mp4"
          className="w-full h-full object-contain cursor-pointer"
          onClick={togglePlay}
          playsInline
        />

        {/* Buffering Indicator */}
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Play Overlay (when paused) */}
        {!isPlaying && !isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/30">
            <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="text-white w-8 h-8 ml-1" />
            </div>
          </div>
        )}

        {/* Controls Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Progress Bar Container */}
          <div className="px-4 pt-4 pb-2">
            <div className="relative h-1.5 bg-white/30 rounded-full cursor-pointer group-hover:h-2 transition-all">
              <div
                className="absolute top-0 left-0 h-full bg-[#F86432] rounded-full"
                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
              ></div>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step="any"
                value={currentTime}
                onChange={handleProgressChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between px-4 pb-4 text-white">
            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={togglePlay}
                className="hover:text-[#F86432] transition"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <button
                onClick={() => skip(-10)}
                className="hover:text-[#F86432] transition"
                title="Rewind 10s"
              >
                <RotateCcw size={18} />
              </button>

              <button
                onClick={cyclePlaybackRate}
                className="text-xs font-bold border border-white/40 rounded px-1.5 py-0.5 hover:bg-white/20 transition w-8 text-center"
              >
                {playbackRate}x
              </button>

              <button
                onClick={() => skip(10)}
                className="hover:text-[#F86432] transition"
                title="Forward 10s"
              >
                <RotateCw size={18} />
              </button>

              <div className="text-xs font-medium tabular-nums text-gray-200 ml-2 hidden sm:block">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>

              <button
                className="hover:text-[#F86432] transition ml-2"
                title="Chapters"
                onClick={onOpenChapters}
              >
                <List size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3 lg:gap-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={toggleMute}
                  className="hover:text-[#F86432] transition"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={20} />
                  ) : (
                    <Volume2 size={20} />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-12 sm:w-16 h-1 bg-white/30 rounded-full appearance-none outline-none cursor-pointer accent-[#F86432]"
                />
              </div>

              <button
                className="hover:text-[#F86432] transition hidden sm:block"
                title="Transcript"
              >
                <FileText size={18} />
              </button>
              <button
                className="hover:text-[#F86432] transition hidden sm:block"
                title="Resources"
              >
                <Folder size={18} />
              </button>
              <button
                className="hover:text-[#F86432] transition hidden sm:block"
                title="Settings"
              >
                <Settings size={18} />
              </button>
              <button
                onClick={togglePiP}
                className="hover:text-[#F86432] transition"
                title="Picture in Picture"
              >
                <PictureInPicture size={18} />
              </button>
              <button
                onClick={toggleFullscreen}
                className="hover:text-[#F86432] transition"
                title="Fullscreen"
              >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="absolute right-2 lg:right-8 z-10 p-2 lg:p-3 bg-[#F86432] text-white rounded-md hover:bg-[#E55A2B] transition shadow-lg opacity-0 group-hover:opacity-100">
        <ArrowRight size={20} />
      </button>
    </div>
  );
};
