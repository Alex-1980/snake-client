const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here
    port: 3000 // PORT number here,
  });

  conn.on("data", (data) => {
    console.log("from server: ", data);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};