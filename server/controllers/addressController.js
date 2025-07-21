import Address from "../models/Address.js";

// Add Address : /api/address/add
export const AddAddress = async (req, res) => {
  try {
    const { addesss, userId } = req.body;
    await Address.create({ ...addesss, userId });
    res.json({ success: true, message: "Addess added successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


// Get Address: api/address/get
export const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    const addresses = Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

