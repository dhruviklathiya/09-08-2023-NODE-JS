const { Travel } = require("../models");

/**
 * Create travel
 * @param {object} reqBody
 * @returns {Promise<Travel>}
 */
const create_travel = async(reqbody) => {
    return Travel.create(reqbody);
}

/**
 * Get travel by destination
 * @param {string} travel_destination
 * @returns {Promise<Travel>}
 */
const get_travel_by_destination = async(travel_destination) => {
    return Travel.findOne({travel_destination})
}

/**
 * Get travel by destination
 * @returns {Promise<Travel>}
 */
const get_travel_list = async() => {
    return Travel.find();
}

module.exports = {
    create_travel,
    get_travel_by_destination,
    get_travel_list
}