let tooltipHandler = {
  latestTooltip : null,
  handleEvent(event) {
    let targetElement = event.target;
    let tooltipText = targetElement.dataset.tooltip;
    if(!tooltipText) return;


    if(event.type === "mouseover") {
      let tooltipToAdd = document.createElement("div");
      tooltipToAdd.innerHTML = tooltipText;
      tooltipToAdd.classList.add("tooltipOnTop");
      targetElement.parentElement.append(tooltipToAdd);

      let height = tooltipToAdd.offsetHeight;
      let spaceInViewport = targetElement.offsetTop - window.scrollY;
      if(height <= spaceInViewport) {
        tooltipToAdd.style.top = targetElement.offsetTop - height;
      } else {
        tooltipToAdd.style.top = targetElement.offsetTop + targetElement.offsetHeight;
      }
      tooltipToAdd.style.left = targetElement.offsetLeft;
      latestTooltip = tooltipToAdd;
    } else if(event.type === "mouseout") {
      if(latestTooltip != null) {
        latestTooltip.remove();
      }
    }
  }
}

let allTooltipElements = document.querySelectorAll("[data-tooltip]");
for(let tooltipElement of allTooltipElements){
  tooltipElement.addEventListener("mouseover", tooltipHandler);
  tooltipElement.addEventListener("mouseout", tooltipHandler);
}
