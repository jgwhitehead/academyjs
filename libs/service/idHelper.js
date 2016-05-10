/**
 * @description Helper functions for working with identifiers.
 *              
 * @author JD
 *     
 */

/**
 * Generates a UUID
 * @returns {String} Randomly generated identifier. This is not production ready code but
 *                   suitable for this exercise
 */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

exports.guid = guid;