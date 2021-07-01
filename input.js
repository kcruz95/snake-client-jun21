let connection;

const handleUserInput = process.stdin.on("data", key => {
  if (key === '\u0003') {
    process.exit();
  }
  // console.log(key);

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === '1') {
    connection.write("Say: * hiss *");
  }

  if (key === '2') {
    connection.write("Say: * Om nom nom *");
  }

  if (key === '3') {
    connection.write("Say: 'OH SH--");
  }

});

const setupInput = function (conn) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;