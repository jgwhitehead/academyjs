var instructionService = require('../service/instructionService');
var HTTP_CONSTANTS = require('./httpConstants').HTTP_CONSTANTS;

var app = GLOBAL.app;


/**
 * @description REST resources for creating, retrieving, updating and deleting instruction sets
 *              
 * @author JD
 *     
 */

/**
 * Gets all existing instruction sets
 */
app.get('/instructionset', function (req, res) {

    //TODO call the service layer to get all existing instruction sets

});

/**
 * Saves an Instruction Set
 */
app.post('/instructionset/', function (req, res) {

    //TODO call the service layer to save the instrutcion set. 



});