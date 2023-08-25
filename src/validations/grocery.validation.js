const Joi = require("joi");

const create_grocery = {
    body: Joi.object().keys({
        grocery_name:Joi.string().required().trim(),
        grocery_category:Joi.string().required().trim(),
        grocery_price:Joi.number().integer().required(),
        grocery_stock:Joi.number().integer().required()
    })
}

module.exports = {
    create_grocery
}