module.exports = {
  ask: function(isConfirmed, yes, no) {
    if (isConfirmed) {
      return yes();
    } else {
      return no();
    }
  }
};
