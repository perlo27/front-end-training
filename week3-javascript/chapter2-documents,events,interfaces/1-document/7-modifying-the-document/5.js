
let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "redbud": {},
      "magnolia": {}
    }
  }
};
let container = document.getElementById('container');
createTree(container, data); // creates the tree in the container

function createTree(container, listData) {
    if(!Object.entries(listData).length) {
      return;
    }
    let ul = document.createElement('ul');
    container.appendChild(ul);
    for(let [key, value] of Object.entries(listData)) {
      let element = document.createElement('li');
      element.textContent = key;
      ul.appendChild(element);
      createTree(element, value);
    }
}
