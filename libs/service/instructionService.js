/**
 * @description Business logic for creating, retrieving, updating and deleting Instruction sets
 *
 * @author JD
 *
 */

var store = require('./instructionServiceStore');
var idHelper = require('./idHelper');
var instructionSetValidator = require('./instructionSetValidator');


 * Reads all the instruction sets
 * @return {Object} object indicating if the read was successful
 */
function readAllInstructionSets() {

    var response = {};

    var instructionSets = store.readAllInstructionSets();

    response.instructionSets = instructionSets;
    response.success = true;

    return response;
}

/**
 * Saves an InstructionSet
 * @param  {Object} object containing the InstructionSet
 * @return {[type]}
 */
function saveInstructionSet(instructionSet{
  var validateResponse = instructionSetValidator.validate(instructionSet);
  if(!validateResponse.success){
    return response;
  }
  instructionSetResource.saveInstructionSet(instructionSet);
}





exports.saveInstructionSet = saveInstructionSet;
exports.readAllInstructionSets = readAllInstructionSets;
