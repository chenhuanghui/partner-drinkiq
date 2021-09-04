import * as jwt from "jsonwebtoken";

export const generateJwtToken = (payload, secretKey, options = {}) => {
	if (!payload) {
		return null;
	}

	return jwt.sign(payload, secretKey, options);
};

export const vertifyJwtToken = (token, secretKey) => {
	try {
		return jwt.verify(token, secretKey);
	} catch (err) {
		return null;
	}
};
