/**
 * @description Controller for popup for creating / editing instruction sets
 *              
 * @author JD
 *     
 */

/**
 * Controller to contain the logic for the instruction set modal
 * @param {object} $scope                 AngularJS scope
 * @param {object} $uibModalInstance      Reference to the popup
 * @param {InstructionSetResource} instructionSetResource REST service for communicating with server 
 * @param {object}   instructionSet         Either an existing Instruction Set or a new instance when adding
 * @param String mode                   The mode, either 'add' or 'edit'
 */
var addEditController = function ($scope, $uibModalInstance, instructionSetResource, instructionSet, mode) {

    var ctrl = this;

    //Set the instruction set as a property on the controller so that is can be accessed by the view
    this.instructionSet = instructionSet;

    /**
     * Function called when the user closes the modal
     */
    this.cancel = function () {
        $uibModalInstance.dismiss();
    };

    /**
     * Adds a new Instruction to the Instruction Set
     * @param {String} type the instruction type e.g. changeColor
     */
    this.addInstruction = function (type) {

        var instruction = {
            'type': type
        };

        //If the user has selected to add a new change color instruction then default the color to
        //white
        if (type == 'changeColor') {
            instruction.color = '#ffffff';
        }

        this.instructionSet.instructions.push(instruction);
    };

    /**
     * Removes an Instruction from the Instruction Set
     * @param {number} index The array index of the Instruction
     */
    this.removeInstruction = function (index) {
        this.instructionSet.instructions.splice(index, 1);
    };


    /**
     * Saves the changes. Either adds the new Instruction Set or updates the existing Instruction Set
     */
    this.save = function () {

        //If the mode is 'add' then create a new instruction set
        if (mode == 'add') {
            //Use the REST service to save the instruction set
            instructionSetResource.save(instructionSet, function (response) {
                $uibModalInstance.close();
            }, function (response) {
                ctrl.errors = response.data.errors;
            });
        } else {
            //Use the REST service to update the instruction set
            instructionSetResource.update(instructionSet, function (response) {
                $uibModalInstance.close();
            }, function (response) {
                ctrl.errors = response.data.errors;
            });
        }

    };
};


//Controller backing the 'Add new Instruction set modal
app.controller('AddEditCtrl', addEditController);