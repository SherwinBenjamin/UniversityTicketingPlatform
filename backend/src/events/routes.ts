import { Router } from "express";
import EventsController from "./controller";
import IUserAuthValidation from "../users/auth/middleware";
import IStaffValidation from "../staff/middleware";

const router = Router();

const { execute } = new EventsController();
const { protect } = new IUserAuthValidation();
const { protectStaff, adminAccess } = new IStaffValidation();

router.get("/", execute);
router.get("/:code", execute);
router.post("/register", protect, execute);
router.delete("/unregister", protect, execute);
router.delete("/:code", protectStaff, adminAccess, execute);
router.post("/event", protectStaff, adminAccess, execute);
router.get("/getEventByClub/:club", execute);
router.get("/getEventUsersByCode/:code", execute);
router.get("/getCountByCode/:code", execute);
router.patch("/updateMaxCap/:code/:new_cap", protectStaff, adminAccess, execute);
router.patch("/activateEvent/:code/:op", protectStaff, adminAccess, execute);
router.get("/getEvent/:user_id", execute);
router.get("/getUserDetailByEventCode/:code", execute);
router.get("/getUsersDetailsForEvent/:eventCode", execute);

export default router;
