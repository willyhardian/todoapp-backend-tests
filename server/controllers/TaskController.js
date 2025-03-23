const { Task } = require("../models");
module.exports = {
    async getTasks(req, res, next) {
        try {
            const tasks = await Task.findAll({});
            res.status(200).json(tasks);
        } catch (err) {
            next(err);
        }
    },
};
