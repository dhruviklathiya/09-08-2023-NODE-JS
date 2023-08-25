const { travel_Service } = require("../services");

const create_travel = async(req,res)=> {
    try {
        const reqbody = req.body;
        const travel_exist = await travel_Service.get_travel_by_destination(reqbody.travel_destination);
        if(travel_exist){
            throw new Error("Travel destination already exist!!!");
        }
        const travel = await travel_Service.create_travel(reqbody);
        if(!travel){
            throw new Error("Something went wrong!!!");
        }
        res.status(200).json({
            success:true,
            message:"Travel created successfully!!!========",
            data: reqbody
        });
    } catch (error) {
        res.status(200).json({
            success:false,
            message: error.message
        });
    }
}

const get_travel_list = async(req,res)=> {
    try {
        const reqbody = req.body;
        const travel_list = await travel_Service.get_travel_list();
        if(!travel_list){
            throw new Error("No data found!!!!");
        }
        res.status(200).json({
            success:true,
            message:"Travel list dispatch successfully!!!",
            data: travel_list
        });
    } catch (error) {
        res.status(200).json({
            success:false,
            message: error.message
        });
    }
}
module.exports = {
    create_travel,
    get_travel_list
}