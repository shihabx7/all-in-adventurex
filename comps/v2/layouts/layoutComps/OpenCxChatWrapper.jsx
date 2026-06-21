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
        initialMessages: ["Hi there! How can we help?"],
        initialQuestions: [
          "What is an escape room?",
          "What escape rooms do you offer?",
          "How do I get a discount?",
        ],
        initialQuestionsPosition: "above-chat-input",
        chatFooterItems: [
          {
            message:
              "Please note that this is an AI-powered chatbot and may provide incorrect responses.",
          },
        ],
        openAfterNSeconds: 10,
        router: {
          goToChatIfNoSessions: true,
        },
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
            outline: "1px solid",
            outlineColor: "#191b1c",
            boxShadow: "0 20px 40px rgba(0,0,0,0.10)",
          },
        },
      }}
    />
  );
}
