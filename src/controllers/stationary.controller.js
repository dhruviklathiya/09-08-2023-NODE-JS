const { stationary_Service } = require("../services")

const create_stationary = async(req,res) => {
    try{
        const reqbody = req.body;

        const item_exist = await stationary_Service.get_item_by_name(reqbody.item_name)
        if(item_exist){
            throw new Error("Item exist already");
        }

        const item = stationary_Service.create_stationary(reqbody);
        if(!item){
            throw new Error("Something went wrong");
        }

        res.status(200).json({
            success: true,
            message: "Item create successfully!",
            data: { reqbody },
        });
    }catch(error){
        res.status(400).json({ success: false, message:  error.message});
    }
};

const get_stationary_list = async(req,res) => {
    try {
        const stationary_list = await stationary_Service.get_stationary_list();

        if(!stationary_list){
            throw new Error("No data found");
        }

        res.status(200).json({
            success: true,
            message: "Data dispatch successfully!",
            data: {stationary_list},
        })
    } catch (error) {
        res.status(400).json({ success: false, message:  error.message});
    }
}

module.exports = {
    create_stationary,
    get_stationary_list
}