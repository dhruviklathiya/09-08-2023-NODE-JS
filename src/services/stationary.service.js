const { Stationary } = require("../models");

/**
 * Get item by name
 * @param {string} item_namename
 * @returns {Promise<Stationary>}
 */
const get_item_by_name = async (item_name) => {
    return Stationary.findOne({item_name});
}
/**
* Create user
* @param {object} reqBody
* @returns {Promise<Stationary>}
*/
const create_stationary = async(reqbody) =>{
    return Stationary.create(reqbody);
};

/**
 * Get user list
 * @returns {Promise<Stationary>}
 */
const get_stationary_list = async() => {
    return Stationary.find();
}

module.exports = {
    get_item_by_name,
    create_stationary,
    get_stationary_list
}