const { Book } = require("../models");
/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<book>}
 */
const createbookService = async (reqBody) => {
    return Book.create(reqBody);
};
const getbooklist = async (reqBody) => {
    return Book.find();
}
module.exports = {
    createbookService,
    getbooklist
}