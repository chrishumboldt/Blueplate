/**
 * @author Chris Humboldt
 */

const { spawn } = require('child_process');

// Set the input arguments.
const package = 'Rocket Propel Library'; 
const version = process.argv[2] ? process.argv[2].split('=')[1] : 'patch';

const commands = [
  `rm -rf css`,
  `npm version ${version}`,
  `node node_modules/sass/sass.js ./build/sass/propel.scss ./css/propel.min.css`,
  `npm publish --access public`
];

// Run the commands
console.log(`Publishing ${package} package`);
const runCommands = spawn(commands.join(' && '), {shell: true});

// Handle the spawn events.
runCommands.stdout.on('data', (data) => {
  console.log(data.toString());
});

runCommands.stderr.on('data', (data) => {
  console.error(data.toString());
});