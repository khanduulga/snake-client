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

  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    conn.write('Name: OMG');
  })

  return conn;
}

//for play.js export the connect func using object shorthand
module.exports = { connect };
