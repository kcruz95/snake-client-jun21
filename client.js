// establishes a connection with the game server
const connect = function () {
  // const up = "Move: up";
  // const down = "Move: down";
  // const left = "Move: left";
  // const right = "Move: right";
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });

  // Print a message on successful connection with the server
  conn.on("connect", () => {
    console.log("You're connected to the server!")
    conn.write('Name: KPC');
  });

  conn.on()

  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};

module.exports = connect;