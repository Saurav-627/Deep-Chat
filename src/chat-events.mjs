//TODO: This file handles event listeners and custom event dispatching.
// chat-events.mjs
export const setupChatEvents = ($chat) => {
    $chat.addEventListener('actionbuttonclicked', (e) => {
      console.log('-- action button clicked', e.detail);
    });
  
    const $btn = document.querySelector('#my-btn');
    $btn.addEventListener('click', () => {
      console.log('External button clicked');
    });
  };