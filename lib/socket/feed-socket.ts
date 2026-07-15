import { io, Socket } from "socket.io-client";
import { useAuthStore } from "@/store/auth.store";

const SOCKET_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export interface SocketAckResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

let socket: Socket | null = null;
let connectedToken: string | null = null;

// Lazily creates (or reuses) the single socket connection to the feed
// namespace, reconnecting with fresh credentials if the auth token changes
// (login/logout/switch user).
export const getFeedSocket = (): Socket => {
  const token = useAuthStore.getState().token;

  if (!socket) {
    socket = io(`${SOCKET_BASE_URL}/feed`, {
      autoConnect: false,
      transports: ["websocket", "polling"],
      auth: { token: token ?? undefined },
    });
    connectedToken = token;
  } else if (token !== connectedToken) {
    connectedToken = token;
    socket.auth = { token: token ?? undefined };
    if (socket.connected) {
      socket.disconnect();
    }
  }

  if (token && socket.disconnected) {
    socket.connect();
  }

  return socket;
};

export const disconnectFeedSocket = () => {
  socket?.disconnect();
  socket = null;
  connectedToken = null;
};

const ACK_TIMEOUT_MS = 15000;

// Promise-wrapped emit-with-ack - the socket.io equivalent of a fetch()
// request/response round trip, used by feedsApi so the rest of the app can
// keep calling it exactly like the old REST client.
export function feedSocketRequest<T = any>(
  event: string,
  payload: unknown = {},
): Promise<SocketAckResponse<T>> {
  const token = useAuthStore.getState().token;
  if (!token) {
    return Promise.reject(new Error("Unauthorized: No token available"));
  }

  const socketInstance = getFeedSocket();

  return new Promise((resolve, reject) => {
    const send = () => {
      socketInstance
        .timeout(ACK_TIMEOUT_MS)
        .emit(event, payload, (err: Error | null, response: SocketAckResponse<T>) => {
          if (err) {
            reject(new Error("Request timed out. Please try again."));
            return;
          }
          if (!response?.success) {
            reject(new Error(response?.message || "Something went wrong"));
            return;
          }
          resolve(response);
        });
    };

    if (socketInstance.connected) {
      send();
      return;
    }

    const handleConnect = () => {
      cleanup();
      send();
    };
    const handleConnectError = (err: Error) => {
      cleanup();
      reject(err);
    };
    const cleanup = () => {
      socketInstance.off("connect", handleConnect);
      socketInstance.off("connect_error", handleConnectError);
    };

    socketInstance.once("connect", handleConnect);
    socketInstance.once("connect_error", handleConnectError);
    socketInstance.connect();
  });
}
