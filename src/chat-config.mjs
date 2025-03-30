//TODO: This file handles the core configuration and utilities for the chat element.
// src/chat-config.mjs
export const configureChat = () => {
  const $chat = document.querySelector("#chat-element");
  const shadowRoot = $chat.shadowRoot;
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
      // styles: {
      //   default: {
      //     background: '#4a90e2',
      //     color: '#fff',
      //     border: 'none',
      //     padding: '8px 16px',
      //     borderRadius: '8px',
      //     cursor: 'pointer'
      //   },
      //   hover: { background: '#357abd' },
      // },
    },
  };

  // $chat.introMessage = {
  //   text: "Rock, Paper, Scissors! Make your guess and see who wins!",
  // };

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

  // $chat.demo = {
  //   response: (message) => {
  //     const options = ["rock", "paper", "scissors"];
  //     const userOption = message.text?.toLocaleLowerCase();
  //     const aiOption = options[Math.floor(Math.random() * 3)];
  //     let response = `I guessed ${aiOption}. `;
  //     if (userOption === aiOption) response += "Draw";
  //     else if (userOption === "rock")
  //       response += aiOption === "paper" ? "I win!" : "You win!";
  //     else if (userOption === "paper")
  //       response += aiOption === "scissors" ? "I win!" : "You win!";
  //     else if (userOption === "scissors")
  //       response += aiOption === "rock" ? "I win!" : "You win!";
  //     else
  //       response =
  //         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, consequuntur. Non nulla eius odit reprehenderit, dolorum ex impedit quidem explicabo magni a maiores aspernatur voluptas et cum alias minima temporibus inventore atque voluptatum reiciendis laudantium est expedita tenetur? Modi labore quia saepe ad ipsa placeat corporis earum, est eos aliquid.    Guess either Rock, Paper or Scissors. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, exercitationem rem doloribus neque mollitia optio necessitatibus, nulla fuga suscipit ipsum architecto accusantium, ratione dolor cumque saepe esse officia magnam ut laborum in incidunt eos autem. Ipsa, possimus rem eligendi magnam illum tempora labore sit perspiciatis nihil cupiditate totam consectetur ut!  ";
  //     return { text: response };
  //   },
  // };

  return $chat;
};
