const { Grocery } = require("../models");
/**
 * Get grocery by grocery_name
 * @param {string} grocery_name
 * @returns {Promise<Grocery>}
 */
const get_grocery_by_name = async(grocery_name) => {
    return Grocery.findOne({grocery_name});
}

/**
 * Create grocery
 * @param {object} reqbody
 * @returns {Promise<Grocery>}
 */
const create_grocery = async(reqbody) => {
    return Grocery.create(reqbody);
}

/**
   * Get grocery list
   * @returns {Promise<Grocery>}
   */
const get_grocery_list = async() => {
    return Grocery.find();
}
module.exports = {
    get_grocery_by_name,
    create_grocery,
    get_grocery_list
}