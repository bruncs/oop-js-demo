function Stopwatch() {
  let duration = 0;
  let timer = null;
  let started = false;

  this.start = function() {
    if (started) throw new Error("Stopwatch has already started.");
    timer = setInterval(function() {
      duration++;
    }, 1000);
    started = true;
  };

  this.stop = function() {
    if (!started) throw new Error("Stopwatch is not started.");
    clearInterval(timer);
    started = false;
  };

  this.reset = function() {
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
