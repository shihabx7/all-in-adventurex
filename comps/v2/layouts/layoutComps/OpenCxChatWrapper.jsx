import React from "react";
import dynamic from "next/dynamic";
//import { Widget } from "@opencx/widget-react";

//  safely load only on the client-side
const OpenCxWidget = dynamic(
  () => import("@opencx/widget-react").then((mod) => mod.Widget),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function OpenCxChatWrapper() {
  return (
    <OpenCxWidget
      options={{
        token: "12632bb52d4e925bd8f90b17b931d39e",
        language: "en",
        bot: {
          name: "All In Adventures",
          avatarUrl:
            "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
        },
        initialMessages: ["Hi there! How can I help you today?"],
        initialQuestions: [
          "What Escape Rooms do you offer?",
          "How do I get a discount?",
        ],
        disableSendingWhenAwaitingAIReply: true,
        assets: {
          organizationLogo:
            "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
        },
        theme: {
          palette: "neutral",
          primaryColor: "#d32622",
          widgetTrigger: {
            size: {
              button: 54,
              icon: 24,
            },
            offset: {
              bottom: 20,
              right: 20,
            },
          },
          widgetContentContainer: {
            borderRadius: "32px",
          },
        },
      }}
    />
  );
}
