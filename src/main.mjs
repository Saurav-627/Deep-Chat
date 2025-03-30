import { configureChat } from './chat-config.mjs';
import { applyChatStyles } from './chat-style.mjs';
import { setupChatHistory } from './chat-history.mjs';
import { setupChatEvents } from './chat-events.mjs';

const $chat = configureChat();
const updateStyles = applyChatStyles($chat);
setupChatHistory($chat);
setupChatEvents($chat, updateStyles);