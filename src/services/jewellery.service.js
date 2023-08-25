const { Jewellery } = require("../models");

/**
 * Get Jewellery by name
 * @param {string} jewellery_name
 * @returns {Promise<Jewellery>}
 */
const get_jewellery_by_name = async (jewellery_name) => {
    return Jewellery.findOne({jewellery_name});
}

/**
 * Create jewellery
 * @param {object} reqbody
 * @returns {Promise<Jewellery>}
 */
const create_jewellery = async(reqbody) => {
    return Jewellery.create(reqbody);
}

/**
 * Get jewellery list
 * @returns {Promise<Jewellery>}
 */
const get_jewellery_list = async() => {
    return Jewellery.find();
}

module.exports = {
    get_jewellery_by_name,
    create_jewellery,
    get_jewellery_list
}