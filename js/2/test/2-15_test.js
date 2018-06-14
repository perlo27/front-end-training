import {assert} from 'chai';
import {ask} from '../2-15';

describe("are you adult ?", function() {
  it("if true return yes", function() {
    let result = ask(
      true,
      () => {
        return "yes";
      },
      () => {
        return "no";
      }
    );
    assert.equal(result, "yes");
  });

  it("if false return no", function() {
    let result = ask(
      false,
      () => {
        return "yes";
      },
      () => {
        return "no";
      }
    );
    assert.equal(result, "no");
  });

  it("if null return no", function() {
    let result = ask(
      null,
      () => {
        return "yes";
      },
      () => {
        return "no";
      }
    );
    assert.equal(result, "no");
  });
});
