//TODO: This file manages all styling, including messageStyles and auxiliaryStyle.
// chat-styles.mjs

import { chat_default } from "./theme/chat";

// src/chat-styles.mjs
export const applyChatStyles = ($chat) => {
  const shadowRoot = $chat.shadowRoot;
  $chat.messageStyles = {
    loading: {
      html: `<div class="lds-ripple"><div></div><div></div></div>`,
      bubble: { backgroundColor: "rgba(255, 255, 255, 0.30)", padding: "10px" },
    },
    default: chat_default,
    html: {
      shared: { bubble: { backgroundColor: "transparent", padding: "0" } },
    },
  };

  if (shadowRoot) {
    const style = document.createElement("style");
    style.textContent = `
      .chat-container {
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        background: #00000052;
        border: 1px solid #cccccc33;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
        color: #fff;
      }
      .logo-wrapper {
        width: 150px;
        height: 120px;
        margin: 0 auto 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
        font-size: 40px;
        font-family: Arial, sans-serif;
      }
      .logo-img {
        width: 100%;
        height: 100%;
      }
      .chat-title {
        margin: 0 0 10px;
        color: rgb(100, 100, 204);
        font-family: Arial, sans-serif;
      }
      .chat-description {
        margin: 0;
        color: inherit;
        font-family: Arial, sans-serif;
        line-height: 1.4;
      }
    `;
    shadowRoot.appendChild(style);
  }

  $chat.auxiliaryStyle = /*css*/ `
      /* Chat container */
      #chat-view {
        // background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        // background: #07182e;
        background: rgba(7, 24, 46, 0.93);
        border: none;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        padding: 15px;
      }

      /* Scrollbar styling */
      #messages::-webkit-scrollbar {
        width: 4px;
      }
      #messages::-webkit-scrollbar-track {
        background: #2d2d2d;
        border-radius: 4px;
      }
      #messages::-webkit-scrollbar-thumb {
        background: #4a90e2;
        border-radius: 4px;
      }
      #messages::-webkit-scrollbar-thumb:hover {
        background: #357abd;
      }

      /* Ripple loading animation */
      .lds-ripple {
        display: inline-block;
        position: relative;
        width: 60px;
        height: 60px;
        margin: 10px auto;
      }
      .lds-ripple div {
        position: absolute;
        border: 3px solid #4a90e2;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
      .lds-ripple div:nth-child(2) {
        animation-delay: -0.6s;
      }
      @keyframes lds-ripple {
        0% { top: 28px; left: 28px; width: 4px; height: 4px; opacity: 0; }
        5% { top: 28px; left: 28px; width: 4px; height: 4px; opacity: 1; }
        100% { top: 0; left: 0; width: 60px; height: 60px; opacity: 0; }
      }

      /* Custom button styles */
      .chat-action-btn {
        background: rgb(4 36 74);
        color: #fff;
        border: 1px solid gray;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.2s ease;
      }
      .chat-action-btn:hover {
        background:rgb(3, 43, 83);
        transform: translateY(-2px);
      }

      /* Input field styling */
      #input{
        box-shadow: rgba(255, 255, 255, 0.03) 0px 4px 0px 0px inset;
      }
      #text-input-container {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 10px;
        margin: 15px 0 30px 0px;
        box-shadow: inset 0 2px 8px (255, 255, 255, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: border-color 0.3s ease;
      }
      #text-input-container:focus-within {
        border-color: #357abd;
        box-shadow: inset 0 2px 8px (255, 255, 255, 0.4), 0 0 8px rgba(74, 144, 226, 0.5);
      }
      #text-input {
        background: transparent;
        border: none;
        color: #e0e0e0;
        font-size: 16px;
        padding: 8px;
        width: 100%;
        outline: none;
        resize: none;
      }
      #text-input::placeholder {
        color: #888888;
        opacity: 0.8;
      }
      #text-input:focus {
        color: #ffffff;
      }

      /* Send button (if present) */
    .inside-right{
        position: absolute;
        right: calc(10% + 1.1em);
        bottom: 2.95em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

      .input-button #submit-icon{
        width:2.21em;
      }
    `;
};