const $chat = document.querySelector("#chat-element");

$chat.demo = {
  // displayErrors: { service: true },
  // displayLoading: { message: true, history: { small: true } },
};

$chat.messageStyles = {
  // default: {
  //   shared: { bubble: { color: "white" } },
  //   user: { bubble: { backgroundColor: "#6767ff" } },
  //   ai: { bubble: { backgroundColor: "#3cbe3c" } },
  // },
  loading: {
    shared: { bubble: { backgroundColor: "lightgrey" } }
  },
  html: {
    shared: { bubble: { backgroundColor: "unset", padding: "0px" } }
  }

};

$chat.history = [
  {
    "html": "<button class=\"deep-chat-button deep-chat-suggestion-button\">What do shrimps eat?</button>",
    "role": "ai"
  },
  { role: "user", text: "hello" },
  { role: "ai", text: "Hello user. How can I help you today?" },
  { role: "user", text: "When will I get married?" },
  { role: "ai", text: "Please enter your birth details" },
];