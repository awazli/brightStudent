const UserModel = require("../models/user");
const nodemailer = require("nodemailer");
const CourseModel = require("../models/course");

module.exports.signup = (req, res) => {
  console.log(req.body);

  const newUser = new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.send({ code: 200, message: "SignUp success" });
    })
    .catch((err) => {
      res.send({ code: 500, mesage: "failed" });
    });
};

module.exports.addCourse = (req, res) => {
  console.log(req.body);

  const newCourse = new CourseModel({
    title: req.body.title,
    stream: req.body.stream,
    address: req.body.address,
  });

  newCourse
    .save()
    .then(() => {
      res.send({ code: 200, message: "Added" });
    })
    .catch((err) => {
      res.send({ code: 500, mesage: "failed" });
    });
};

module.exports.addTeachers = (req, res) => {
  console.log(req.body);
  const newUser = new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: "t",
  });

  newUser
    .save()
    .then(() => {
      res.send({ code: 200, message: "SignUp success" });
    })
    .catch((err) => {
      res.send({ code: 500, message: "SignUp Err" });
    });
};

module.exports.signin = (req, res) => {
  console.log(req.body.email);

  // email and password match

  UserModel.findOne({ email: req.body.email })
    .then((result) => {
      console.log(result, "11");

      // match password with req.body.password
      if (result.password !== req.body.password) {
        res.send({ code: 404, message: "password wrong" });
      } else {
        if (result.role == "a") {
          res.send({
            email: result.email,
            code: 200,
            message: "admin found",
            token: "hfgdhg",
            type: "admin",
          });
        } else if (result.role == "t") {
          res.send({
            email: result.email,
            code: 200,
            message: "admin found",
            token: "hfgdhg",
            type: "teacher",
          });
        } else {
          res.send({
            email: result.email,
            code: 200,
            message: "user Found",
            token: "hfgdhg",
            type: "user",
          });
        }
      }
    })
    .catch((err) => {
      res.send({ code: 500, message: "user not found" });
    });
};

module.exports.details = async (req, res) => {
  try {
    const allUser = await UserModel.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
};

module.exports.addedCourses = async (req, res) => {
  try {
    const allCourse = await CourseModel.find({});
    res.send({ status: "ok", data: allCourse });
  } catch (error) {
    console.log(error);
  }
};

module.exports.sendotp = async (req, res) => {
  console.log(req.body);
  const _otp = Math.floor(100000 + Math.random() * 900000);
  console.log(_otp);
  let user = await UserModel.findOne({ email: req.body.email });
  // send to user mail
  if (!user) {
    res.send({ code: 500, message: "user not found" });
  }

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: "yatinpandat97@gmail.com",
    to: req.body.email, // list of receivers
    subject: "OTP", // Subject line
    text: String(_otp),
    html: `<html>
                    < body >
                    Hello and welcome
                </ >
               </html > `,
  });

  if (info.messageId) {
    console.log(info, 84);
    UserModel.updateOne({ email: req.body.email }, { otp: _otp })
      .then((result) => {
        res.send({ code: 200, message: "otp send" });
      })
      .catch((err) => {
        res.send({ code: 500, message: "Server err" });
      });
  } else {
    res.send({ code: 500, message: "Server err" });
  }
};

module.exports.submitotp = (req, res) => {
  console.log(req.body);

  UserModel.findOne({ otp: req.body.otp })
    .then((result) => {
      //  update the password

      UserModel.updateOne(
        { email: result.email },
        { password: req.body.password }
      )
        .then((result) => {
          res.send({ code: 200, message: "Password updated" });
        })
        .catch((err) => {
          res.send({ code: 500, message: "Server err" });
        });
    })
    .catch((err) => {
      res.send({ code: 500, message: "otp is wrong" });
    });
};

module.exports.deleteStudent = (req, res) => {
  UserModel.findByIdAndRemove(req.params.id, (error, data) => {
    console.log(req.param.id);
    console.log(data);
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};

// module.exports.edit = (req,res)=>{
//     UserModel.findById(req.params.id,(error,data)=>{
//         if (error){
//             return next(error)
//         }
//         else{
//             res.send(data)
//         }

//     })
// }

// module.exports.editUser = (req,res)=> {
//     UserModel.findByIdAndUpdate(req.params.id,{
//         newUser:req.body
// },(error,data)=>{
//     if(error){
//         console.log(error);
//         return next(error)
//     } else{
//         res.json(data)
//     }
// })
// }
