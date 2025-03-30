//TODO: This file manages the chat history and loading logic (no HTTP calls as requested).
// chat-history.mjs
export const setupChatHistory = ($chat) => {
    $chat.history = [
      { role: 'user', text: 'hello' },
      { role: 'ai', text: 'Hello user. How can I help you today?' },
      { role: 'user', text: 'When will I get married?' },
      { role: 'ai', text: 'Please enter your birth details' },
      { role: 'ai', html: `<button class="chat-action-btn">Select Birth Profile</button>` },
    ];
  
    $chat.loadHistory = async function loadHistory(index) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([{ role: 'ai', text: 'History loaded!' }]);
        }, 3000);
      });
    };
  
    $chat.loadHistory(0); // Trigger loading
  };
