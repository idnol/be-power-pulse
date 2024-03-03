const { wrapper } = require("../../middlewar");
const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./current");
const updateProfile = require("./updateProfile");
const updateAvatar = require("./updateAvatar")

module.exports = {
    register: wrapper(register),
    login: wrapper(login),
    logout: wrapper(logout),
    getCurrent: wrapper(getCurrent),
    updateProfile: wrapper(updateProfile),
    updateAvatar: wrapper(updateAvatar),
}