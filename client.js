const net = require('net');

//Estabishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('->', data)
  })
  //on connection to server return succesful connection string and send name to server
  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    //name sent to server
    conn.write('Name: KIL');
    //EXPERIMENTS
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 2000)
    // conn.write('Move: up');
  })

  return conn;
}

//for play.js export the connect func using object shorthand
module.exports = { connect };
