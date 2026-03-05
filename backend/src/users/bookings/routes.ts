import { Router } from "express";
import BookingsController from "./controller";
import BookingAuthValidation from "./middleware";
import IStaffValidation from "../../staff/middleware";

const router: Router = Router();

const { protectBooking } = new BookingAuthValidation();
const { protectStaff, adminAccess } = new IStaffValidation();
const { execute } = new BookingsController();

router.route("/").get(protectBooking, execute);

router.route("/livecount").get(protectBooking, execute);

router.route("/updateticketissued").patch(protectStaff, adminAccess, execute);

router.route("/resendemail").post(protectStaff, adminAccess, execute);

export default router;
