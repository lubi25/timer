const validTime = process.argv.slice(2);

const timerBeep = function(time) {
  if (typeof time === 'number' && time > 0 && time !== 'undefined') {   // only goes off if 'time' is a number and > 0
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
};

validTime.forEach((time) => {
  timerBeep(Number(time));
});