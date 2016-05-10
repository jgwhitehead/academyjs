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

    var getInstructionSetsResponse = instructionService.readAllInstructionSets();

    if (getInstructionSetsResponse.success) {
        res.status(HTTP_CONSTANTS.SUCCESS).json(getInstructionSetsResponse);
    } else {
        res.status(HTTP_CONSTANTS.NOT_FOUND).json(getInstructionSetsResponse);
    }

});

/**
 * Saves an Instruction Set
 */
app.post('/instructionset/', function (req, res) {
    var saveInstructionSetResponse = instructionService.saveInstructionSet(req.body);

    if (saveInstructionSetResponse.success) {
        res.status(HTTP_CONSTANTS.SUCCESS).json(saveInstructionSetResponse);
    } else {
        res.status(HTTP_CONSTANTS.ERROR).json(saveInstructionSetResponse);
    }

});