var mainWindow;
const config = require('./config')
const nodeCleanup = require('node-cleanup');
const driver = require('elgato-stream-deck');
const buttongrid = require('./ui/widgets/SDButtonGrid')
const matrixmaker = require('./ui/helpers/matrixmaker')
nodeCleanup(function (exitCode, signal) { 
    console.log("exiting");
    config.saveConfigs();
});
config.loadConfigs();
mainWindow = require('./ui/windows/MainWindow.js').create();
var decks = [];
decks = driver.listStreamDecks();
console.log(decks.length + " decks found.");
if (decks[1]) {
    console.log("Multiple decks plugged. Starting Picker.");
} else {
    var deckmatrix = matrixmaker.getMatricesByModel(decks[0].model)
    mainWindow.layout.addWidget(buttongrid.create(deckmatrix.x,deckmatrix.y))
}
mainWindow.show();