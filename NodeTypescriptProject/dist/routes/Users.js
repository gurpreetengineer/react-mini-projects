"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticatedUser = exports.addOneUser = exports.getAllUsers = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const UserDao_mock_1 = __importDefault(require("@daos/User/UserDao.mock"));
const constants_1 = require("@shared/constants");
const userDao = new UserDao_mock_1.default();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
/**
 * Get all users.
 *
 * @param req
 * @param res
 * @returns
 */
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield userDao.getAll();
        return res.status(OK).json({ users });
    });
}
exports.getAllUsers = getAllUsers;
/**
 * Add one user.
 *
 * @param req
 * @param res
 * @returns
 */
function addOneUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: constants_1.paramMissingError,
            });
        }
        yield userDao.add(user);
        return res.status(CREATED).end();
    });
}
exports.addOneUser = addOneUser;
/**
 * Middleware
 *
 * @param req
 * @param res
 * @param next

 * @returns
 */
function authenticatedUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.headers.email !== undefined) {
            return res.status(200).json({ message: "User is authenticated!" });
            next();
        }
        else {
            return res.status(401).json({ message: "Unauthorised access!!" });
        }
    });
}
exports.authenticatedUser = authenticatedUser;
