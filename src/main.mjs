import { configureChat } from './chat-config.mjs';
import { applyChatStyles } from './chat-style.mjs';
import { setupChatHistory } from './chat-history.mjs';
import { setupChatEvents } from './chat-events.mjs';
import { backgroundRendered } from './theme/backgroundRendered';

const $chat = configureChat();
const updateStyles = applyChatStyles($chat);
setupChatHistory($chat);
setupChatEvents($chat, updateStyles);
backgroundRendered();