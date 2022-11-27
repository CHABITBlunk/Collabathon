const models = require('../models');
const userController = {};

userController.create = async (req, res) => {
    try {
        const user = await models.user.create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        });
        await res.send({user});
    } catch (error) {
        res.status(400).json({error});
    }
}

userController.login = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        });
        if (req.body.password === user.password) {
            res.json({user});
        } else {
            res.status(401).json({message: "login failed"});
        }
    } catch (error) {
        res.status(400).json({error});
    }
}

userController.verify = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.headers.authorization
            }
        });
        await res.json({user});
    } catch (error) {
        res.status(400).json(error);
    }
}

userController.getAll = async (req, res) => {
    try {
        const users = await models.user.findAll();
        res.json({users});
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = userController;
