
  let dots = ". ".repeat(40);
  for(let i=0; i < 10; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = dots;
    field.append(paragraph);
  }
  field.addEventListener("click", (event) => {
    let xMin = field.offsetLeft;
    let xMax = field.offsetLeft + field.offsetWidth - (ball.offsetWidth);
    let yMin = field.offsetTop;
    let yMax = field.offsetTop + field.offsetHeight - (ball.offsetHeight);

    let ballNewX = event.pageX - (ball.offsetWidth / 2);
    let ballNewY = event.pageY - (ball.offsetHeight / 2);
    ballNewX = ballNewX < xMin ? xMin : ballNewX;
    ballNewX = ballNewX > xMax ? xMax : ballNewX;
    ballNewY = ballNewY < yMin ? yMin : ballNewY;
    ballNewY = ballNewY > yMax ? yMax : ballNewY;

    ball.style.left = ballNewX - field.offsetLeft;
    ball.style.top = ballNewY - field.offsetTop;
  });
