//TODO: This file handles the core configuration and utilities for the chat element.
// src/chat-config.mjs
export const configureChat = () => {
  const $chat = document.querySelector("#chat-element");
  $chat.htmlClassUtilities = {
    "chat-action-btn": {
      events: {
        click: () => {
          $chat.dispatchEvent(
            new CustomEvent("actionbuttonclicked", {
              detail: { data: { action: "birth-profile" } },
            })
          );
        },
      },
    },
  };
  return $chat;
};
