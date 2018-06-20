
document.addEventListener("click", function(event) {
  const li = event.target.closest('li');

  if(!li) return;

  const ulList = li.querySelectorAll(":scope > ul");
  if(!ulList.length) return;


  if(!li.dataset.hidden) {

    ulList.forEach(ul => {
      ul.style.display = "none";
    });
    li.dataset.hidden = "true";
  } else {

    ulList.forEach(ul => {
      ul.style.display = "block";
    });
    li.dataset.hidden = "";
  }
});
