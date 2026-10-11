import { io, Socket } from "socket.io-client";

const SOCKET_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

let socket: Socket | null = null;

// The default socket.io namespace (room.socket.ts on the backend) has no
// auth middleware today, unlike the /feed namespace - this connects the
// same way. Room membership is still enforced at the REST layer
// (send/list-messages both check participants), so an unauthenticated
// socket can join a room:id but can't read/send anything for it without a
// valid session.
export const getMessagingSocket = (): Socket => {
  if (!socket) {
    socket = io(SOCKET_BASE_URL, {
      autoConnect: true,
      transports: ["websocket", "polling"],
    });
  }
  return socket;
};

export const joinRoom = (roomId: string) => {
  getMessagingSocket().emit("room:join", { roomId });
};

export const leaveRoom = (roomId: string) => {
  getMessagingSocket().emit("room:leave", roomId);
};
