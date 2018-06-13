describe("application", function() {

  describe("takes the max of two numbers", function() {

    function makeTest(x) {

      let infinity = 7/0;
      let minusInfinity = -7/0;

      it(`max of ${x} and ${infinity} is ${infinity}`, function() {
        assert.equal(max(x,infinity), infinity);
      });
      it(`max of ${x} and ${minusInfinity} is ${x}`, function() {
        assert.equal(max(x,minusInfinity), x);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("sorts an array", function() {

    function makeTest(array) {
      let lengthBefore = array.length;
      sort(array);
      let lengthAfter = array.length;
      it(`length of the array didn't change it was ${lengthBefore}, now it is ${lengthAfter}`,
      function() {
        assert.isTrue(lengthBefore === lengthAfter);
      });

      for(let i = 0; i < array.length - 1 ; i++) {
        it(`${array[i]} index ${i} <= ${array[i+1]} index ${i+1}`,
          function() {
            assert.isTrue(array[i] <= array[i+1]);
          });
        }
      }

      makeTest([]);
      makeTest([1]);
      makeTest([1, 0, -20]);
      makeTest([1, 3, 4, 2, -1]);

    });

    // ... more tests to follow here, both describe and it can be added
  });
