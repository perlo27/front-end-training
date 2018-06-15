import { calculator, ladder } from "../4-4";
import chai from "chai";
import sinon from "sinon";

describe("calculator tests", function() {
  it("sum two correct number", function() {
    // const promptStub = sinon.stub(window, 'prompt'); doesn't work on NodeJS
    // promptStub.returns(4); doesn't work on NodeJS
    calculator.read(4, 4);
    let sum = calculator.sum();
    chai.assert.equal(sum, 8);
  });

  it("multiply two correct number", function() {
    // const promptStub = sinon.stub(window, 'prompt'); doesn't work on NodeJS
    // promptStub.returns(4); doesn't work on NodeJS
    calculator.read(4, 4);
    let multiplyResult = calculator.mul();
    chai.assert.equal(multiplyResult, 16);
  });

  it("try to sum number and string", function() {
    // const promptStub = sinon.stub(window, 'prompt'); doesn't work on NodeJS
    // promptStub.returns(4); doesn't work on NodeJS
    calculator.read(4, "hello");
    let sum = calculator.sum();
    chai.expect(sum).to.be.NaN;
  });

  it("try to multiply two strings", function() {
    // const promptStub = sinon.stub(window, 'prompt'); doesn't work on NodeJS
    // promptStub.returns(4); doesn't work on NodeJS
    calculator.read("hello", "hello");
    let mul = calculator.mul();
    chai.expect(mul).to.be.NaN;
  });
});

describe("test ladder", function() {
  afterEach(function() {
    ladder.step = 0;
  });

  it("go two steps up expect two", function() {
    ladder.up().up();
    let stepsNum = ladder.showStep();
    chai.assert.equal(stepsNum, 2);
  });
  it("go three steps up and one down expect two", function() {
    ladder
      .up()
      .up()
      .up()
      .down();
    let stepsNum = ladder.showStep();
    chai.assert.equal(stepsNum, 2);
  });
  it("try to go two steps down, should return 0 (cannot go on minus", function() {
      let stepsNum = ladder.down().down().showStep();
      chai.assert.equal(stepsNum, 0);
  });
});
