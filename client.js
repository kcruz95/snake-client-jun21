const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.88.88.41",
    port: 50541
  });

  // Print a message on successful connection with the server
  conn.on("connect", () => {
    console.log("You're connected to the server!")
    conn.write("Name: KPC");

    // const up = "Move: up";
    // const down = "Move: down";
    // const left = "Move: left";
    // const right = "Move: right";

    //   setTimeout(function () {
    //     console.log(up);
    //   }, 50);
    //   setTimeout(function () {
    //     console.log(right);
    //   }, 50);
    //   setTimeout(function () {
    //     console.log(down);
    //   }, 50);
    //   setTimeout(function () {
    //     console.log(left);
    //   }, 50)
  });

  // conn.on()

  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};

module.exports = connect;