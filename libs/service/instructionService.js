/**
 * @description Business logic for creating, retrieving, updating and deleting Instruction sets
 *              
 * @author JD
 *     
 */

var store = require('./instructionServiceStore');
var idHelper = require('./idHelper');
var instructionSetValidator = require('./instructionSetValidator');


/**
 * Reads all the instruction sets
 * @return {Object} object indicating if the read was successful
 */
function readAllInstructionSets() {

    var response = {};

    //TODO call the store to retrieve existing instruction sets

    response.instructionSets = instructionSets;
    response.success = true;

    return response;
}

/**
 * Saves an InstructionSet
 * @param  {Object} object containing the InstructionSet
 * @return {[type]}
 */
function saveInstructionSet(instructionSet) {
    //TODO implement method to save an instructionSet to the store
    //Use the instuctionSetValidator to validate the instruction set    
}





exports.saveInstructionSet = saveInstructionSet;
exports.readAllInstructionSets = readAllInstructionSets;