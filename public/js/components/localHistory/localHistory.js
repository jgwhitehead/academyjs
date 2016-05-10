/**
 * @description component which displays a history of the last 5 commands executed
 *              
 * @author JD
 *     
 */


app.component('localHistory', {

        /**
         * Business logic for the component
         * @param {object} $http  AngularJS service for making http calls
         * @param {object}   $scope AngularJS scope
         */
        controller: function ($http, $scope) {

            var self = this;
            this.history = [];

            $scope.$on(Events.INSTRUCTION_SET_EXECUTED, function (event, instructionSet) {
                self.history.unshift(instructionSet);
                self.history = self.history.slice(0, 3);

            });
        },
        //View to render the component
        templateUrl: Templates.INSTRUCTION_SET_HISTORY
    }


);