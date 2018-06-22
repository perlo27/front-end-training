function Task() {
  this.sum = function(a, b) {
    return parseFloat(a) + parseFloat(b);
  };

  this.random = function(min, max) {
    return min + Math.random() * (max - min);
  };
}

function ArrayOperations() {
  this.operation = function() {
    let styles = ["Jazz", "Blues"];
    styles.push("Rock-n-Roll");
    styles[Math.floor((styles.length - 1) / 2)] = "Classics";
    console.log(styles.shift());
    styles.unshift("Rap", "Reggae");
  };

  this.camelize = function(str) {
    let arr = str.split("-");
    for (let i = 1; i < arr.length; i++) {
      let tmp = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      arr[i] = tmp;
    }
    return arr.join("");
  };

  this.filterRange = function(arr, a, b) {
    return arr.filter(e => e >= a && e <= b);
  };

  this.filterRangeInPlace = function(arr, a, b) {
    arr.forEach(e => {
      if (e < a || e > b) {
        arr.splice(arr.indexOf(e), 1);
      }
    });
  };

  this.reversedSort = function(arr) {
    arr.sort((a, b) => b - a);
  };

  this.copySorted = function(arr) {
    return arr.slice().sort((a, b) => a - b);
  };

  this.mapToNames = function(arr) {
    return arr.map(e => e.name);
  }

  this.mapToObjects = function(arr) {
    return arr.map(e => {
      return {
        fullName: e.name + " " + e.surname,
        id: e.id
      }
    })
  }

  this.sortByName = function(arr) {
    return arr.sort((a, b) => a.name > b.name);
  }

  this.getAverageAge = function(arr) {
    return (arr.map(e => e.age).reduce((a, b) => a + b)) / arr.length;
  }

  this.unique = function(arr) {
    let result = [];
    arr.forEach(e => {
      if (!result.includes(e)) {
        result.push(e);
      }
    })
    return result;
  }
}

export { Task, ArrayOperations };
