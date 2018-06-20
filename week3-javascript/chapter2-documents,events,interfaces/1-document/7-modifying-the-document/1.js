
  let text = "<b>Some test text</b>";

  testDiv.append(document.createTextNode(text));
  // adds as text

  testDiv2.innerHTML = text;
  // parses as html

  testDiv3.textContent = text;
  // adds as text
