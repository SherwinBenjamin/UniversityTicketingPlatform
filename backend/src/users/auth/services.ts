import ErrorHandler from "../../utils/errors.handler";

import IUserAuthValidation from "./middleware";

import {
	AuthObj,
	IUserAuthLoginReqObj,
	IUserAuthResObject,
	IUserAuthSignupReqObj,
} from "./interface";

import JWTUtils from "../../utils/jwt.utils";
import UsersAuthHelper from "./helper";
import bcrypt from "bcryptjs";

export default class UsersAuthService extends UsersAuthHelper {
	jwtHelper: JWTUtils;
	constructor() {
		super();
		this.jwtHelper = new JWTUtils();
	}

	protected loginService = async (email: string, password: string): Promise<any> => {
		if (!email || !password) {
			throw new ErrorHandler({
				status_code: 400,
				message: "Both email and password are required",
				message_code: "EMAIL_PASSWORD_REQUIRED",
			});
		}

		const user = await this.getUserByEmailHelper(email);

		const isMatch = await bcrypt.compare(password, user.password || "");
		if (!isMatch) {
			throw new ErrorHandler({
				status_code: 401,
				message: "Invalid credentials",
				message_code: "INVALID_CREDENTIALS",
			});
		}

		const token = await this.jwtHelper.generateTokens({
			email: user.email,
			id: user.id,
			name: user.name,
		});

		const { password: _pw, ...userWithoutPassword } = user as any;

		const response: AuthObj = {
			user: userWithoutPassword,
			token: token.access_token,
		};

		return response;
	};

	protected signupService = async (
		reqObj: IUserAuthSignupReqObj
	): Promise<any> => {
		const user: IUserAuthResObject = await this.signupUserHelper(reqObj);
		const token = await this.jwtHelper.generateTokens({
			email: user.email,
			id: user.id,
			name: user.name,
		});

		const { password: _pw, ...userWithoutPassword } = user as any;

		const response: AuthObj = {
			user: userWithoutPassword,
			token: token.access_token,
		};

		return response;
	};

	protected deleteUserService = async (user_id: string): Promise<void> => {
		const user = await this.getUserHelper(user_id);

		if (!user) {
			throw new ErrorHandler({
				status_code: 404,
				message: "User not found",
				message_code: "USER_NOT_FOUND",
			});
		}

		if (user.is_ticket_issued) {
			throw new ErrorHandler({
				status_code: 400,
				message: "User cannot be deleted now, Ticket has already been issued",
				message_code: "TICKET_ALREADY_ISSUED_USER_CANNOT_BE_DELETED",
			});
		}

		await this.deleteUserHelper(user_id);
		return;
	};

	protected getUserService = async (
		user_id: string
	): Promise<IUserAuthResObject> => {
		const user = await this.getUserHelper(user_id);

		if (!user) {
			throw new ErrorHandler({
				status_code: 404,
				message: "User not found",
				message_code: "USER_NOT_FOUND",
			});
		}

		return user;
	};
}
