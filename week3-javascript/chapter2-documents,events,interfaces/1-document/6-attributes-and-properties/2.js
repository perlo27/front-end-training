
  // setting style for a single link
  let links = document.querySelectorAll('a');
  for(let el of links){
    let link = el.getAttribute('href');
    if(link != null && link.includes("://") && !link.startsWith("http://internal.com")) {
      el.style.color = "orange"
    }
  }
