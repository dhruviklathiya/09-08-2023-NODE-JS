const { Category } = require("../models");

/**
 * category user
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getCategoryList = async () => {
    return Category.find();
  };

module.exports = {
    createCategory,
    getCategoryList
}