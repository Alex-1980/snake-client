const { UP, LEFT, DOWN, RIGHT } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write(UP);
  }
  if (key === 'a') {
    connection.write(LEFT);
  }
  if (key === 's') {
    connection.write(DOWN);
  }
  if (key === 'd') {
    connection.write(RIGHT);
  }
  if (key === 'i') {
    connection.write("Say: Hi!");
  }
  if (key === 'o') {
    connection.write("Say: Good!");
  }
  if (key === 'p') {
    connection.write("Say: Nice!");
  }
};

module.exports = { setupInput };