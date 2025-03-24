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

  // $chat.introMessage = {
  //   text: "Rock, Paper, Scissors! Make your guess and see who wins!",
  // };

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
      else
        response =
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, consequuntur. Non nulla eius odit reprehenderit, dolorum ex impedit quidem explicabo magni a maiores aspernatur voluptas et cum alias minima temporibus inventore atque voluptatum reiciendis laudantium est expedita tenetur? Modi labore quia saepe ad ipsa placeat corporis earum, est eos aliquid.    Guess either Rock, Paper or Scissors. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, exercitationem rem doloribus neque mollitia optio necessitatibus, nulla fuga suscipit ipsum architecto accusantium, ratione dolor cumque saepe esse officia magnam ut laborum in incidunt eos autem. Ipsa, possimus rem eligendi magnam illum tempora labore sit perspiciatis nihil cupiditate totam consectetur ut!  ";
      return { text: response };
    },
  };

  return $chat;
};
