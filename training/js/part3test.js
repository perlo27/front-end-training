
function testing() {

  before(() => console.log("Testing started – before all tests"));
  after(() => console.log("Testing finished – after all tests"));

  it("2 less than 3", function() {
    assert.equal(min(2, 3), 2);
  });

  it("4 less than 5", function() {
    assert.equal(min(5, 4), 4);
  });
};
