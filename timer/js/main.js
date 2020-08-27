let time = 10;
fps = 100;

let Timer = function (obj) {
  this.time = obj.time;
  this.fps = obj.fps;
  this.onEnd = obj.onEnd || null;
  this.onStart = obj.start || null;
  this.onTick = obj.onTick || null;
  this.intervalId = null;

  this.start = () => {
    this.interval = setInterval(this.update, 1000 / this.fps);
  };

  this.stop = () => {
    clearInterval(this.interval);
  };

  this.update = () => {
    this.time > 0 ? (this.time -= 1 / this.fps) : this.stop();
    this.onTick ? this.onTick() : void 0;
    return this.get();
  };
  this.get = (par) => {
    switch (par) {
      case undefined:
        return this.time;
        break;
      case "dig":
        return Math.ceil(this.time);
        break;
      case "end":
        return this.onEnd();
        break;
    }
  };
};

let timer1 = new Timer({
  time: 10,
  fps: fps,
  onTick: tick,
});

timer1.start();
requestAnimationFrame(tick);

function tick() {
  id("output").innerHTML = timer1.get("dig");
  id("slider").style.width = (timer1.get() / time) * 100 + "%";
}

function id(id) {
  return document.getElementById(id);
}
