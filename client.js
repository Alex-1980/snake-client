const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here
    port: PORT // PORT number here,
  });

  conn.on("data", (data) => {
    console.log("from server: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // conn.write("Move: up");
  });

  conn.write("Name: CS");


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };