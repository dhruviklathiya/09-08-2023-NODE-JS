const { Music } = require("../models");

/**
 * Get user by music_track
 * @param {string} music_track
 * @returns {Promise<Music>}
 */
const get_music_by_track = async(music_track) => {
    return Music.findOne({music_track});
}
/**
 * Create music
 * @param {object} reqbody
 * @returns {Promise<Music>}
 */
const create_music = async(reqbody) => {
    return Music.create(reqbody);
}

/**
 * Get music list
 * @returns {Promise<Music>}
 */
const get_music_list = async() => {
    return Music.find();
}

module.exports = {
    get_music_by_track,
    create_music,
    get_music_list
}