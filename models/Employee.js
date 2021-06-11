const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
    },
    cno:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    sex:{
        type: String,
    },
    dob:{
        type: String,
        required: true
    },
    des:{
        type: String,
    },
    address:{
        type: String,
    },
    job:{
        type: String,
    },
    img:
	{
		data: Buffer,
		contentType: String
	}
});
module.exports = new mongoose.model("Employee", EmployeeSchema);

// module.exports = new mongoose.model('Image', imageSchema);
