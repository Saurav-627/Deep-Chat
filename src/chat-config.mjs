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

  $chat.introMessage = {
    text: "Rock, Paper, Scissors! Make your guess and see who wins!",
  };

  $chat.demo = {
    response: (message) => {
      const options = ["rock", "paper", "scissors"];
      const userOption = message.text?.toLocaleLowerCase();
      const aiOption = options[Math.floor(Math.random() * 3)];
      let response = `I guessed ${aiOption}. `;
      if (userOption === aiOption) response += "Draw";
      else if (userOption === "rock")
        response += aiOption === "paper" ? "I win!" : "You win!";
      else if (userOption === "paper")
        response += aiOption === "scissors" ? "I win!" : "You win!";
      else if (userOption === "scissors")
        response += aiOption === "rock" ? "I win!" : "You win!";
      else response = "Guess either Rock, Paper or Scissors";
      return { text: response };
    },
  };

  return $chat;
};
