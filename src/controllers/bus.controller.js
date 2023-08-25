const { bus_Service } = require("../services")

const create_Bus = async(req,res) => {
    try {
        const reqBody = req.body;

        const bus = await bus_Service.create_Bus(reqBody);

        res.status(200).json({
          success: true,
          message: "Bus create successfully!",
          data: { bus },
        });
      } catch (error) {
        res.status(400).json({ success: false, message:  error.message});
      }
}

/** Get bus list */
const get_bus_list = async (req, res) => {
  try {
    const bus_list = await bus_Service.get_bus_list();
    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: bus_list,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  create_Bus,
  get_bus_list
}