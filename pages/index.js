import { useSocket } from "@/context/socket";
import { useEffect } from "react";
export default function Home() {
  const socket = useSocket();
  console.log("Home socket", socket);
  useEffect(() => {
    socket?.on("connect", () => {
      console.log("socket id", socket.id);
    });
  }, [socket]);
  return <h1>Welcome</h1>;
}
