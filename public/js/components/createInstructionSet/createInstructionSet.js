/**
 * @description Angular JS component for button to create a new Instruction Set
 *              
 * @author JD
 *     
 */

//Component for adding a new Instruction Set. Initially renders a button which when clicked launches a modal allowing the user
//to enter details of the instruction set
app.component('createInstructionSetControls', {

    /**
     * Defines the logic for the component e.g. what happens when the user clicks 'save'?
     * @param   {object} instructionSetResource REST service providing access to server side logic
     * @param   {object} $uibModal              Modal instance
     * @param   {object}   $scope               AngularJS scope
     */
    controller: function (instructionSetResource, $uibModal, $scope) {

        'use strict';

        //Create a reference to the controller that makes it accessible within callback functions
        var self = this;

        //Create a new object to represent the new Instruction Set and initialise
        //its set of instructions to an empty list
        this.instructionSet = {};
        this.instructionSet.instructions = [];

        /**
         * Function that opens a new modal window displaying the form to enter the instruction set details
         */
        this.open = function () {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: Templates.INSTRUCTION_SET_FORM,
                controller: 'AddEditCtrl',
                bindToController: true,
                controllerAs: 'ctrl',
                resolve: {
                    instructionSet: function () {
                        return self.instructionSet;
                    },
                    mode: function () {
                        return FormModes.ADD;
                    }
                }
            });

            modalInstance.result.then(function () {

                //Once the modal window has been closed emit an event so that anything listening
                //can perform relevant actions e.g. refresh the list of instruction sets in the main view
                $scope.$emit(Events.INSTRUCTION_SET_CREATED, {});
            });
        };


    },
    //view to render for the component
    templateUrl: Templates.CONTROLS

});