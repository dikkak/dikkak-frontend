import { useCallback } from "react";
import { Client, messageCallbackType } from "@stomp/stompjs";

const useStomp = (
  client: React.MutableRefObject<Client | undefined>,
  destination: string,
  callback: messageCallbackType
) => {
  const connect = useCallback(() => {
    client.current = new Client({
      brokerURL: "wss://dev.dikkak.com/api/dikkak-chat",
      connectHeaders: {
        Authorization: localStorage.getItem("token") || "",
      },
      reconnectDelay: 200000,
      heartbeatIncoming: 16000,
      heartbeatOutgoing: 16000,
      onConnect: () => {
        client.current?.subscribe(destination, callback);
      },
      // onStompError: (frame) => {
      //   console.error("1 stomp error : ", frame);
      // },
      // onDisconnect: (frame) => {
      //   console.error("2 disconnect : ", frame);
      // },
      // onWebSocketClose: (frame) => {
      //   console.log("3 Stomp WebSocket Closed", frame);
      // },
      // debug: function (str) {
      //   console.error("4 debug : ", str);
      // },
      // onUnhandledMessage: (msg) => {
      //   console.log("5 unhandled Message", msg);
      // },
    });

    client.current?.activate();
  }, [callback, client, destination]);

  const disconnect = useCallback(() => {
    client.current?.deactivate();
  }, [client]);

  return [connect, disconnect];
};

export default useStomp;
