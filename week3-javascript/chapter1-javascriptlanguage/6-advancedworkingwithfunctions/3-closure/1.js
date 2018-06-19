function makeCounter() {
      let count = 0;

      function counter() {
        return count++;
      }

      counter.set = value => count = value;

      counter.decrease = () => count--;

      return counter;
}

// could not solve this one, maybe will return later
