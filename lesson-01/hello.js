// console.log(process.argv)

const name = process.argv[2] ?? 'Cornelius';
console.log(`Hello from the server side, ${name}!`);
console.log("Node Version:" + process.version);
console.log("Platform: " + process.platform);
// console.log("Started at: " + new Date(process.uptime() * 1000).toISOString().substr(11, 8));
console.log("Started at: " + new Date().toISOString())