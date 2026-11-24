import { io, Socket } from "socket.io-client";
import { useAuthStore } from "@/store/auth.store";
import { API_BASE_URL } from "@/lib/api/base-url";

let socket: Socket | null = null;
let connectedToken: string | null = null;

useAuthStore.subscribe((state) => {
  if (!socket || state.token === connectedToken) return;
  socket.disconnect();
  connectedToken = state.token;
  socket.auth = { token: state.token ?? undefined };
});

export const getMessagingSocket = (): Socket => {
  const token = useAuthStore.getState().token;
  if (!socket) {
    socket = io(API_BASE_URL, {
      autoConnect: false,
      transports: ["websocket", "polling"],
      auth: { token: token ?? undefined },
    });
    connectedToken = token;
  } else if (token !== connectedToken) {
    connectedToken = token;
    socket.disconnect();
    socket.auth = { token: token ?? undefined };
  }
  if (token && socket.disconnected) socket.connect();
  return socket;
};

export const joinRoom = (roomId: string) => {
  getMessagingSocket().emit("room:join", { roomId });
};

export const leaveRoom = (roomId: string) => {
  getMessagingSocket().emit("room:leave", roomId);
};
