var  jsdom = require('jsdom');
const {JSDOM}  = jsdom;

const {document}  = (new JSDOM('<html><body></body></html>')).window; 
require('babel-register')();

var exposedProperties = ['window', 'navigator', 'document'];

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;

