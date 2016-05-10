/**
 * @description Component to render a list of Instruction sets
 *              
 * @author JD
 *     
 */

//Component to render a list of instruction sets
app.component('instructionSetList', {

        //component takes a couple of inputs
        bindings: {
            //A set of instruction sets to display
            instructionSets: '=instructionSets'
        },
        //Logic for the component
        controller: function ($uibModal, instructionSetResource, $scope) {

            var self = this;


        },
        //View to render the instruction set list
        templateUrl: Templates.INSTRUCTION_SET_LIST
    }


);