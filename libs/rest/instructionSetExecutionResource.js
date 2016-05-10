/**
 * @description REST resources for executing instruction sets
 *              
 * @author JD
 *     
 */

var instructionService = require('../service/instructionService');
var HTTP_CONSTANTS = require('./httpConstants').HTTP_CONSTANTS;

var app = GLOBAL.app;

/**
 * Executes an Instruction Set
 */
app.post('/instructionsetexecution/:id', function (req, res) {
    var executeInstructionSetResponse = instructionService.executeInstructionSet(req.params.id);
    res.status(HTTP_CONSTANTS.SUCCESS).json(executeInstructionSetResponse);
});