import {ask} from '../../src/4/2.js';
import {assert} from 'chai';

// describe("is Empty", function(){
//     it("return true when object has no properties",function(){
//        Calculator.xd();
//     });
// });

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