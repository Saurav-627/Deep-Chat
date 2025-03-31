export const chat_default = {
  shared: {
    bubble: {
      color: "#e0e0e0",
      padding: "10px 15px",
      borderRadius: "12px",
      maxWidth: "80%",
    },
  },
  user: {
    bubble: {
      ...{
        background:
          "linear-gradient(0deg, #1a3bb5 0%, #1a3bb5 100%), linear-gradient(180deg, #6989F4 0%, #3C64F4 100%)",
        marginLeft: "auto",
      },
    },
  },
  ai: {
    bubble: {
      background: "rgba(255, 255, 255, 0.30)",
      marginRight: "auto",
    },
  },
};

export const chat_light_mode = {
  shared: {
    bubble: {
      color: "#333333", // Dark text color for better contrast in light mode
      padding: "10px 15px",
      borderRadius: "12px",
      maxWidth: "80%",
    },
  },
  user: {
    bubble: {
      ...{
        background:
          "linear-gradient(0deg, #4285f4 0%, #4285f4 100%), linear-gradient(180deg, #6989F4 0%, #3C64F4 100%)", // Softer blue gradient for light mode
        marginLeft: "auto",
        color: "#ffffff",
      },
    },
  },
  ai: {
    bubble: {
      background: "rgb(230 225 225)", // Light gray background with slight transparency
      marginRight: "auto",
    },
  },
};
