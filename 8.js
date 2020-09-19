const Timer = require("timerpromise");

const timer = async () => {
  console.time("total");

  console.time("first");
  await new Timer(3).start.then(() => console.log("Первый таймер"));
  console.timeEnd("first");

  console.time("second");
  await new Timer(2).start.then(() => console.log("Второй таймер"));
  console.timeEnd("second");

  console.timeEnd("total");
};

timer();
