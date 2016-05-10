/**
 * @description Parent component for the application that renders the list of existing instruction sets
 *              along with a button to add a new one
 *              
 * @author JD
 *     
 */

//Parent component for the application
app.component('instructionSetContainer', {


        bindings: {},
        controller: function ($http, $scope) {

            var self = this;

            //Initialise an array of Instruction Sets. Initially empty but will be populated
            //by a call to the server
            this.instructionSets = [];

            /**
             * Loads details of all of the existing Instuction Sets
             */
            this.loadInstructionSets = function () {

                //User angular $http service to make an AJAX request to the server to load details
                //of all existing instruction sets
                $http({
                    type: 'GET',
                    url: '/instructionset/'
                }).then(function (response) {

                    //If the call is successful populate the instructionSets array with the results
                    self.instructionSets = response.data.instructionSets;

                }, function (response) {

                    //On an error log to console
                    console.log(response);
                });

            };


            //Load details of the existing instruction sets
            this.loadInstructionSets();

            //When a new instruction set is added refresh the list of existing instruction sets
            $scope.$on(Events.INSTRUCTION_SET_CREATED, this.loadInstructionSets);

            //When an instruction set is deleted refresh the list of existing instruction sets
            $scope.$on(Events.INSTRUCTION_SET_DELETED, this.loadInstructionSets);

            //When an instruction set is deleted refresh the list of existing instruction sets
            $scope.$on(Events.INSTRUCTION_SET_UPDATED, this.loadInstructionSets);

            //When an instruction set is played updated the ui log
            $scope.$on(Events.INSTRUCTION_SET_PLAYED, function (event, instructionSet) {
                $scope.$broadcast(Events.INSTRUCTION_SET_EXECUTED, instructionSet);
            });
        },
        //View to render the component
        templateUrl: Templates.INSTRUCTION_SET_CONTAINER
    }


);