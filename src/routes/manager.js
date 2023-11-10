const express = require("express");
const router = express.Router();

const managerController = require("../app/controllers/ManagerController");

router.get("/stored/courses", managerController.storedCourses);
router.get("/stored/:id/edit", managerController.edit);
router.put("/courses/:id", managerController.update);
router.delete("/courses/:id/delete", managerController.delete);

module.exports = router;
