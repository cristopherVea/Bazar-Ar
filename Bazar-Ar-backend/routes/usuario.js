const express = require('express');
const router = express.Router();
const usuario = require("../controladores/usuario");

router.get("/", usuario.getAll);
router.get("/:id", usuario.getById);
router.post("/", usuario.add);
router.put("/:id", usuario.update);
router.delete("/:id", usuario.deleteElement);


module.exports = router;