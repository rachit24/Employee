const router = require("express").Router();
const Employee = require("../models/Employee");

router
//Reading The Data of Particular Employee
  .get("/employee/:id", async (req, res) => {
    const { id } = req.params;
    const getEmployee = await Employee.findOne({ _id: id });
    res.render("partEmp", { employee: getEmployee });
  })

//Deleting A Particular Employee
  .get("/delete/:id", (req, res) => {
    const { id } = req.params;
    Employee.deleteOne({ _id: id })
      .then(() => {
        console.log("Employee Deleted Successfully!");
        res.redirect("/table");
      })
      .catch((err) => console.log(err));
  })

//Updating The Records
.get("/edit/:id", async (req, res) => {
  const { id } = req.params;

  const getData = await Employee.findOne({ _id: id });
  res.render("editEmployee", { employee: getData });
})

.post("/edit/:id", (req, res) => {
  const { id } = req.params;
  const{
    fname, lname, cno, email, sex, dob, des, address, job 
  } = req.body;

  Employee.updateOne({ _id: id }, {fname, lname, cno, email, sex, dob, des, address, job })
    .then(() => {
      console.log("successfully! updated the record!");
      res.redirect("/table");
    })
    .catch((err) => console.log(err));
});

module.exports = router; 