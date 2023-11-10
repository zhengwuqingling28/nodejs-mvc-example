const Course = require("../models/Course");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class ManagerController {
  //[GET] /manager/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("manager/courses", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  //[GET] manager/stored/courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  //[PUT] manager/courses/:id
  update(req, res, next) {
    const formData = req.body;
    console.log("_id: ");
    console.log(req.params.id);
    console.log("update blog:");
    console.log(formData);
    Course.updateOne({ _id: req.params.id }, formData)
      .then(() => res.redirect("/manager/stored/courses"))
      .catch(next);
  }

  //[DELETE] manager/courses/:id/delete
  delete(req, res, next) {
    console.log("delete _id: ");
    console.log(req.params.id);
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new ManagerController();
