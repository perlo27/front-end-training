import { Task, ArrayOperations } from "../5-2";
import chai from "chai";

describe("sum numbers from visitor", () => {
  let task;
  beforeEach(() => {
    task = new Task();
  });

  it("give two numbers, expect sum", () => {
    let result = task.sum(4, 7);
    chai.assert.equal(result, 11);
  });

  it("give two integer pixels values, expect sum", () => {
    let result = task.sum("12px", "65px");
    chai.assert.equal(result, 77);
  });

  it("give two float pixels values, expect sum", () => {
    let result = task.sum("12.5px", "65.6px");
    chai.assert.equal(result, 78.1);
  });
});

describe("a random number from min to max", () => {
  let task;
  beforeEach(() => {
    task = new Task();
  });

  it("give two numbers, expect number in this interval", () => {
    let result = task.random(1, 5);
    chai.expect(result).to.be.at.least(1);
    chai.expect(result).to.be.at.most(5);
  });
});

describe("array methods", () => {
  let operator;
  beforeEach(() => {
    operator = new ArrayOperations();
  });

  it("give dash-separated word, expect camel case", () => {
    let result = operator.camelize("background-color");
    chai.assert.equal(result, "backgroundColor");
  });

  it("give longer dash-separated word, expect camel case", () => {
    let result = operator.camelize("list-style-image");
    chai.assert.equal(result, "listStyleImage");
  });

  it("give dash-separated word with dash on beginning, expect camel case", () => {
    let result = operator.camelize("-background-color");
    chai.assert.equal(result, "BackgroundColor");
  });

  it("give array and expect filtered one with typed borders", () => {
    let givenArray = [5, 3, 8, 1];
    let result = operator.filterRange(givenArray, 1, 4);
    chai.expect(result).to.be.eql([3, 1]);
    chai.expect(givenArray).to.be.eql([5, 3, 8, 1]);
  });

  it("give array and expect same array without lesser or greater numbers", () => {
    let givenArray = [5, 3, 8, 1];
    operator.filterRangeInPlace(givenArray, 1, 4);
    chai.expect(givenArray).to.be.eql([3, 1]);
  });

  it("give array and expect reversed sort", () => {
    let givenArray = [5, 3, 8, 1];
    let result = operator.reversedSort(givenArray);
    chai.expect(givenArray).to.be.eql([8, 5, 3, 1]);
  });

  it("give array and expect sorted copy", () => {
    let givenArray = [5, 3, 8, 1];
    let result = operator.copySorted(givenArray);
    chai.expect(givenArray).to.be.eql([5, 3, 8, 1]);
    chai.expect(result).to.be.eql([1, 3, 5, 8]);
  });

  it("give array of users and expect array of names", () => {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    let users = [john, pete, mary];
    let usersMapped = operator.mapToNames(users);
    chai.expect(usersMapped).to.be.eql(["John", "Pete", "Mary"]);
  });

  it("give array of users and expect array of objects with surnames", () => {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    let users = [john, pete, mary];
    let usersMapped = operator.mapToObjects(users);
    let johnMapped = { fullName: "John Smith", id: 1 };
    let peteMapped = { fullName: "Pete Hunt", id: 2 };
    let maryMapped = { fullName: "Mary Key", id: 3 };

    chai.expect(usersMapped).to.be.eql([johnMapped, peteMapped, maryMapped]);
  });

  it("give array of users and expect array sorted by names", () => {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    let users = [john, pete, mary];
    let sortedByNames = operator.sortByName(users);
    chai.expect(sortedByNames).to.be.eql([john, mary, pete]);
  });

  it("give array of users and expect average age", () => {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };
    let users = [john, pete, mary];
    let average = operator.getAverageAge(users);
    chai.assert.equal(average, 28);
  });

  it("give array of strings and expect array of unique strings", () => {
    let strings = [
      "Hare",
      "Krishna",
      "Hare",
      "Krishna",
      "Krishna",
      "Krishna",
      "Hare",
      "Hare",
      ":-O"
    ];
    let uniqueStrings = operator.unique(strings);
    chai.expect(uniqueStrings).to.be.eql(["Hare", "Krishna", ":-O"]);
  });

  it("does not change the source array", function() {
    let strings = ["Krishna", "Krishna", "Hare", "Hare"];
    operator.unique(strings);
    chai.assert.deepEqual(strings, ["Krishna", "Krishna", "Hare", "Hare"]);
  });
});
