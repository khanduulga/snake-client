// Stores the active TCP connection object.
let connection;

/* Setup User Interface
  Specifically, so that we can handle user input via stdin
*/
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
    case 'w':
      connection.write('Move: up');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 'e':
      connection.write('Say: hi');
      break;
    case 'q': 
      connection.write('Say: getaway!');
      break;
    case 'r':
      connection.write('Say: omg!');
      break;
    case 't':
      connection.write('Say: catch me');
      break;

  }
  // if (key === 'w') {
  //   conn.write('Move: up');
  // }
}

module.exports = { setupInput };