const express =require("express")
const bodyParser = require('body-parser')

const userController = require('./controller/user')

const mongoose = require('mongoose');
const cors = require('cors')
const port = 5000
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/test', (err,success) => {
    if (err) {
        console.log('DB Err.')
    } else {
        console.log('DB Connected.')
    }
}); 




app.post("/signup",userController.signup)
app.post("/addCourse",userController.addCourse)
app.post("/signin",userController.signin)
app.post("/send-otp" , userController.sendotp)
app.post("/submit-otp" , userController.submitotp)
app.post("/addTeachers",userController.addTeachers)
app.get("/details",userController.details)
app.get("/addedCourses",userController.addedCourses)
app.delete("/deleteStudent/:id",userController.deleteStudent)
app.post("/contact",userController.contact)
// app.get("/edit/:id",userController.edit)
// app.put("/editUser/:id",userController.editUser)

app.listen(port,()=>{
    console.log(`Backend running ${port}`)
})