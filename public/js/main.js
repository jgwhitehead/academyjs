/**
 * @description Entry point for the application
 *              
 * @author JD
 *     
 */

var app = angular.module('SpheroChain', ['ngResource', 'RestResources', 'ui.bootstrap']);

//Locations of AngularJS component templates
var Templates = {
    INSTRUCTION_SET_FORM: "js/components/instructionSetForm/instructionSetForm.html",
    CONTROLS: "js/components/createInstructionSet/createInstructionSetContent.html",
    INSTRUCTION: "js/components/instruction/instruction.html",
    INSTRUCTION_SET_CONTAINER: "js/components/instructionSetContainer/instructionSetContainer.html",
    INSTRUCTION_SET_LIST: "js/components/instructionSetList/instructionSetList.html",
    INSTRUCTION_SET_HISTORY: "js/components/localHistory/localHistory.html"
};


//Events for components to listen for and respond to
var Events = {
    INSTRUCTION_SET_UPDATED: "0",
    INSTRUCTION_SET_CREATED: "1",
    INSTRUCTION_SET_DELETED: "2",
    INSTRUCTION_SET_PLAYED: "3",
    INSTRUCTION_SET_EXECUTED: "4"

};

//Modes for the form component
var FormModes = {
    ADD: "add",
    EDIT: "edit"
};