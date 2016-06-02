/**
 * @description Validation logic for Instruction Sets
 *
 * @author JD
 *
 */


var instructionTypes = [
  require("../sphero/instructions/spheroMove"),
  require("../sphero/instructions/spheroChangeColor")
];

/**
 * Validate that an Intruction Set is correctly structured
 * @param   {object}   instructionSet The Instruction Set to validate
 * @returns {object} Response object holding any validation errors and a success flag
 */
function validate(instructionSet) {
    var response = {};
    response.errors = [];
    response.success = true;

    //Validate that an id has been provided
    if (!instructionSet.id) {
        response.errors.push("No id set for instructionSet");
    }

    if(!instructionSet.name || instructionSet.name.length === 0){
      response.errors.push("No name has been provided");
    }

    if(!instructionSet.description || instructionSet.description.length === 0){
      response.errors.push("No description has been provided");
    }

    if (!instructionSet.instructions || instructionSet.instructions.length === 0) {
        response.errors.push("You must provide at least one instruction");
    } else {

        //Validate the instrucitons
        for (var index in instructionSet.instructions) {

            var instruction = instructionSet.instructions[index];

            for (var instructionTypeIndex in instructionTypes) {

                var instructionType = instructionTypes[instructionTypeIndex];

                if (instruction.type === instructionType.key) {
                    var instructionIndex = Number(index) + 1;
                    instructionType.validate(instruction, instructionIndex, response.errors);
                }
            }


        }
    }

    if (response.errors.length > 0) {
        response.success = false;
    }

    return response;
}

exports.validate = validate;
