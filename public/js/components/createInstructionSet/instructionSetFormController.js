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

        //TODO implement function so that a new instruction is added to the instruction set
    };


    //TODO create a removeInstruction function that will delete an instruction from an instruction set

    /**
     * Saves the changes. Either adds the new Instruction Set or updates the existing Instruction Set
     */
    this.save = function () {

        //If the mode is 'add' then create a new instruction set
        if (mode == 'add') {
            //TODO Use the REST service to save the instruction set


        } else {


        }

    };
};


//Controller backing the 'Add new Instruction set modal
app.controller('AddEditCtrl', addEditController);