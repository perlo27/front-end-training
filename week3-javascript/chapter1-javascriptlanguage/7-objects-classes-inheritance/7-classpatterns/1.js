{
  function Clock({ template }) {

    let timer;

    function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) min = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }

    this.stop = function() {
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };

  }


  // Rewrite using prototype
  function ClockProtoType({ template }) {
    this._template = template;
  }
  ClockProtoType.prototype._timer = null;
  ClockProtoType.prototype._render = function () {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) min = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
  ClockProtoType.prototype.stop = function() {
    clearInterval(this._timer);
  };
  ClockProtoType.prototype.start = function() {
    this._render();
    this._timer = setInterval(this._render.bind(this), 1000);
  };

  let clock = new ClockProtoType({template: 'h:m:s'});
  clock.start();
}
