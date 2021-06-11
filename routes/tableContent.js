const router = require("express").Router();
const Employee = require("../models/Employee");

router.get("/table", async(req,res)=>{
    const allEmployees = await  Employee.find();
    res.render("table", {employees: allEmployees});
});

module.exports = router;