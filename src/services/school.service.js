const { School } = require("../models")

/**
 * Create school
 * @param {object} reqbody
 * @returns {Promise<School>}
 */
const create_school = async (reqbody) => {
    return School.create(reqbody);
};

/**
 * Get school by name
 * @param {string} school_name
 * @returns {Promise<School>}
 */
const get_school_by_name = async(school_name) => {
    return School.findOne({school_name});
}

/**
 * Get school list
 * @returns {Promise<School>}
 */
const get_school_list = async () => {
    return School.find();
}

module.exports = {
    create_school,
    get_school_by_name,
    get_school_list
}