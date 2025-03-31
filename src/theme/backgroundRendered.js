export const backgroundRendered = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const body = document.body;
      const bgImage = new Image();
      const logoImage = new Image();
  
      // Preload both images
      bgImage.src = "/astroimage2.jpg";
      logoImage.src = "/logo-512.png";
  
      let imagesLoaded = 0;
      const totalImages = 2;
  
      const checkAllLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          // Reveal the page
          body.classList.remove("hidden");
          body.classList.add("loaded");
        }
      };
  
      bgImage.onload = checkAllLoaded;
      logoImage.onload = checkAllLoaded;
  
      // Fallback in case images fail to load
      bgImage.onerror = () => checkAllLoaded();
      logoImage.onerror = () => checkAllLoaded();
    });
  };