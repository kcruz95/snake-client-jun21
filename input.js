const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", handleUserInput);

  // const handleUserInput = function () {

  // };

  return stdin;
};

const handleUserInput = process.stdin.on("data", key => {
  if (key === '\u0003') {
    process.exit();
  } console.log(key);
});

module.exports = setupInput;