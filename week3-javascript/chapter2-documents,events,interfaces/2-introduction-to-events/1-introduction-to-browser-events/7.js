
  let carousel = document.querySelector(".carousel");
  let firstImageIndex = 0;
  let totalImages = 10;
  let carouselCapacity = 3;
  let imageSourceBase = "https://en.js.cx/carousel/";
  function redraw() {
    for(let i=0; i < carouselCapacity; i++) {
      carousel.children[i + 1].src = imageSourceBase + (firstImageIndex + i + 1) + ".png";
    }
  }
  redraw();
  let carouselUpdate = function(direction) {
    if(direction === 'left') {
      firstImageIndex = firstImageIndex - carouselCapacity;
      firstImageIndex = firstImageIndex >= 0 ? firstImageIndex : 0;
    } else {
      let max = (totalImages - carouselCapacity);
      firstImageIndex = firstImageIndex + carouselCapacity;
      firstImageIndex = firstImageIndex > max ? max : firstImageIndex;
    }
    redraw();
  }
