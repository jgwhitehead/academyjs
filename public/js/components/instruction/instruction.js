/**
 * @description Component to render a particular Instruction
 *              
 * @author JD
 *     
 */

//Parent component for the application
app.component('instructionView', {


        bindings: {
            instruction: '=instruction',
            view: '=view'
        },
        controller: function ($http, $scope) {


        },
        //View to render the component
        templateUrl: Templates.INSTRUCTION
    }


);