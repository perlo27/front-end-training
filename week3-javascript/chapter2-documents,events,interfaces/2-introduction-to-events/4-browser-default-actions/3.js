const imageDir = "https://en.js.cx/gallery/img";
const thumbExtension = "-thumb.jpg";
const largeExtension = "-lg.jpg";

const enlarge = {
  handleEvent(event) {
    const targetElement = event.target;

    if(!targetElement.closest) return;

    const closestLi = targetElement.closest("li");
    if(closestLi) {
      const enlarged = document.querySelector("[data-enlarged]");
      const srcEnlarged = enlarged.src;
      const srcThumb = targetElement.src;

      const currentIndex = Number(srcThumb.slice(imageDir.length, -1 * thumbExtension.length));
      setImages(currentIndex);
    }
  }
}

function setImages(index){

        const ul = document.querySelector("ul");
        let thumbIndex = 0;
        for(let i=1; i < ul.children.length + 2; i++) {
          if(i === index) {
            const largeImg = document.querySelector("[data-enlarged]");
            largeImg.src = imageDir + i + largeExtension;
            console.log("large " + largeImg.src);
          } else {
            ul.children[thumbIndex].firstElementChild.src = imageDir + i + thumbExtension;
            console.log(thumbIndex + " " +  ul.children[thumbIndex].firstElementChild.src);
            thumbIndex = thumbIndex + 1;
          }
        }
}

setImages(1);
document.addEventListener("click", enlarge);
