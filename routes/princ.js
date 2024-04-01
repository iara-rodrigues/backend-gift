const express = require("express");
const router = express.Router();

const upload = require("../config/multer");
const PrincController = require("../controllers/PrincController");

router.post("/addMsg", upload.single("file"), PrincController.create);
router.get("/getMsg", PrincController.findAll);
router.delete("/deleteMsg/:id", PrincController.remove);
router.get("/getOneMsg/:seq", PrincController.findOne);

module.exports = router;
