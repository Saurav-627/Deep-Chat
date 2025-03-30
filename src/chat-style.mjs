import { chat_default, chat_light_mode } from "./theme/chat";

export const applyChatStyles = ($chat) => {
  const shadowRoot = $chat.shadowRoot || $chat.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  if (shadowRoot) {
    shadowRoot.appendChild(style);
  } else {
    console.error("ShadowRoot not found!");
    return () => {};
  }

  const updateStyles = (isLightMode) => {
    $chat.LoadingMessageStyles = {
      loading: {
        bubble: {
          backgroundColor: "rgba(255, 255, 255, 0.30)",
          padding: "10px",
        },
      },
    };
    $chat.messageStyles = {
      default: isLightMode ? chat_light_mode : chat_default,
      html: {
        shared: { bubble: { backgroundColor: "transparent", padding: "0" } },
      },
    };
    style.textContent = /*css*/ `
      .chat-container {
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        background: ${isLightMode ? "#f5f5f5" : "#00000052"};
        border: 1px solid ${isLightMode ? "#cccccc" : "#cccccc33"};
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
        color: ${isLightMode ? "#333" : "#fff"};
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
        color: ${isLightMode ? "#4a90e2" : "rgb(100, 100, 204)"};
        font-family: Arial, sans-serif;
      }
      .chat-description {
        margin: 0;
        color: inherit;
        font-family: Arial, sans-serif;
        line-height: 1.4;
      }
      #chat-view {
        background: ${isLightMode ? "#ffffffde" : "rgba(7, 24, 46, 0.93)"};
        border: none;
        box-shadow: 0 4px 20px rgba(0, 0, 0, ${isLightMode ? "0.1" : "0.5"});
        padding: 15px;

        @media(max-width:576px){
          padding:0;
        }
      }
      #messages::-webkit-scrollbar {
        width: 4px;
      }
      #messages::-webkit-scrollbar-track {
        background: ${isLightMode ? "#e0e0e0" : "#2d2d2d"};
        border-radius: 4px;
      }
      #messages::-webkit-scrollbar-thumb {
        background: ${isLightMode ? "#a0a0a0" : "#4a90e2"};
        border-radius: 4px;
      }
      #messages::-webkit-scrollbar-thumb:hover {
        background: ${isLightMode ? "#808080" : "#357abd"};
      }
      .chat-action-btn {
        background: ${isLightMode ? "#e0e0e0" : "rgb(4, 36, 74)"};
        color: ${isLightMode ? "#333" : "#fff"};
        border: 1px solid ${isLightMode ? "#cccccc" : "gray"};
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;       
      }
      .chat-action-btn:hover {
        transition: background 0.3s ease, transform 0.2s ease;
        background: ${isLightMode ? "#d0d0d0" : "rgb(3, 43, 83)"};
        transform: translateY(-2px);
      }
      /*Input field styling   */
      #input{
        box-shadow: rgba(255, 255, 255, 0.03) 0px 4px 0px 0px inset !important;
      }
      #text-input-container {
        background: ${
          isLightMode ? "#fafafa" : "rgba(255, 255, 255, 0.05)"
        } !important;
        border-radius: 12px !important;
        padding: 10px !important;
        margin: 15px 0 30px 0 !important;
        border: 1px solid ${
          isLightMode ? "#e0e0e0" : "rgba(255, 255, 255, 0.2)"
        } !important;
        
      }
      #text-input-container:focus-within {
        transition: border-color 0.3s ease !important;
        border-color: ${isLightMode ? "#a0a0a0" : "#357abd"} !important;
      }
      #text-input {
        background: transparent !important;
        border: none !important;
        color: ${isLightMode ? "#333" : "#e0e0e0"} !important;
        font-size: 16px !important;
        padding: 8px !important;
        width: 100% !important;
        outline: none !important;
        resize: none !important;
      }
      #text-input::placeholder {
        color: ${isLightMode ? "#888" : "#888888"} !important;
        opacity: 0.8 !important;
      }
      #text-input:focus {
        color: ${isLightMode ? "#000" : "#ffffff"} !important;
      }

      .inside-right{
        position: absolute !important;
        right: calc(10% + 1.1em) !important;
        bottom: 2.95em !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
      }
        
      .input-button #submit-icon{
        width:2.21em !important;
       }
    `;
    console.log("Styles updated to:", isLightMode ? "light" : "dark");
    console.log(isLightMode);
  };

  // Initial style application
  updateStyles(false);

  return updateStyles;
};
