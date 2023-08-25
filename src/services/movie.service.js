const { Movie } = require("../models")

/**
 * Get movie by title
 * @param {string} movie_title
 * @returns {Promise<Movie>}
 */
const get_movie_by_title = async(movie_title) => {
    return Movie.findOne({movie_title});
}

/**
 * Create movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const create_movie = async(reqbody) => {
    return Movie.create(reqbody);
}

/**
 * Get movie list
 * @returns {Promise<User>}
 */
const get_movie_list = async() => {
    return Movie.find();
}

module.exports = {
    get_movie_by_title,
    create_movie,
    get_movie_list
}