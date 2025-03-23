//TODO: Custom element definition remains unchanged but is kept as a separate module.
// deep-conversation.mjs
class DeepConversation extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `<deep-chat id="chat-element"></deep-chat>`;
      const $chat = this.shadowRoot.querySelector('#chat-element');
      console.log({ $chat });
    }
  }
  
  customElements.define('deep-conversation', DeepConversation);