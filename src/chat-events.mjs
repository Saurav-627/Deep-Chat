//TODO: This file handles event listeners and custom event dispatching.
// chat-events.mjs
export const setupChatEvents = ($chat, updateStyles) => {
  $chat.addEventListener("actionbuttonclicked", (e) => {
    console.log("-- action button clicked", e.detail);
  });

  const $btn = document.querySelector("#my-btn");
  let isLightMode = false;
  $btn.addEventListener("click", () => {
    isLightMode = !isLightMode;
    updateStyles(isLightMode);
    $btn.textContent = isLightMode ? "Dark Mode" : "Light Mode";
    document.body.classList.toggle("light-mode", isLightMode);
    document.body.classList.toggle("dark-mode", !isLightMode);
  });
  // Set initial dark mode
  document.body.classList.add("dark-mode");
};
