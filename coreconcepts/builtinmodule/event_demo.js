/**
 * built-in module
 * ----------------------------
 * events
 * ====================================
 * Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture
 * in which certain kinds of objects (called "emitters") 
 * emit named events that cause Function objects ("listeners") to be called.
 *
 */


const events = require('node:events');
var eventEmitter = new events.EventEmitter(); 

var connection = function () {

    console.log("successfully Connected ");
}

eventEmitter.on('connectioned', connection);
eventEmitter.emit('connectioned');

