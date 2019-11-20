const service = require('./service');
class UserController {
    constructor(){}
    addUser = async (req, res) => {
        try {
            const result = await service.add(req);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    deleteUser = async (req, res) => {
        try {
            const result = await service.del(req);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    }
    updateUser = async (req, res) => {
        try {
            const result = await service.update(req);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    }
    getUser = async (req, res) => {
        try {
            const result = await service.get(req);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    getAllUsers = async (req, res) => {
        try {
            const result = await service.getAll(req);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
}

module.exports = UserController;