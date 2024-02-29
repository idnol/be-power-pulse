const express = require("express");
const { validateBody, validateUserRights } = require("../middlewar");
const authenticate = require("../middlewar/authenticate");
const {getAll, getRecommended} = require("../controller/products");

const router = express.Router();

router.get("/", getAll);
router.get("/recommended", getRecommended);

// router.get("/:id", getById);
// router.post("/", authenticate, validateUserRights, validateBody(schemas.addSchema), add);
// router.put(
//     "/:id",
//     authenticate,
//     validateUserRights,
//     validateBody(schemas.updateSchema),
//     updateById
// );
// router.delete("/:id", authenticate, validateUserRights, deleteById);

module.exports = router;
