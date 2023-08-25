const { Pharmacy } = require("../models");

/**
 * Get Pharmacy by pharmacy_name
 * @param {string} pharmacy_name
 * @returns {Promise<Pharmacy>}
 */
const get_pharma_by_name = async(pharmacy_name) => {
    return Pharmacy.findOne({pharmacy_name});
};

/**
 * Create pharmacy
 * @param {object} reqbody
 * @returns {Promise<Pharmacy>}
 */
const create_pharmacy = async(reqbody) => {
    return Pharmacy.create(reqbody);
}

/**
 * Get pharmacy list
 * @returns {Promise<Pharmacy>}
 */
const get_pharmacy_list = async() => {
    return Pharmacy.find();
}

module.exports = {
    get_pharma_by_name,
    create_pharmacy,
    get_pharmacy_list
}