// utils/getImageBrightness.js
export const getImageBrightness = (imageUrl) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
  
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
  
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        let total = 0;
  
        for (let i = 0; i < imageData.data.length; i += 4 * 100) {
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const b = imageData.data[i + 2];
          total += (r + g + b) / 3;
        }
  
        const brightness = total / (imageData.data.length / 4 / 100);
        resolve(brightness); // ~0-255
      };
    });
  };
  