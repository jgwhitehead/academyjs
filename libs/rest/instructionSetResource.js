/**
 * @description REST resources for creating, retrieving, updating and deleting instruction sets
 *              
 * @author JD
 *     
 */

var instructionService = require('../service/instructionService');
var HTTP_CONSTANTS = require('./httpConstants').HTTP_CONSTANTS;

var app = GLOBAL.app;



/**
 * Gets the InstructionSet with the specified identifier
 */
app.get('/instructionset/:id', function (req, res) {

    var findInstructionSetResponse = instructionService.readInstructionSet(req.params.id);

    if (findInstructionSetResponse.success) {
        res.status(HTTP_CONSTANTS.SUCCESS).json(findInstructionSetResponse);
    } else {
        res.status(HTTP_CONSTANTS.NOT_FOUND).json(findInstructionSetResponse);
    }

});

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