const { Bus } = require("../models")

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const create_Bus = async (reqBody) => {
 return Bus.create(reqBody);
};

/**
 * Get Bus list
 * @returns {Promise<Bus>}
 */
const get_bus_list = async (filter, options) => {
    return Bus.find();
};

module.exports = {
    create_Bus,
    get_bus_list
}