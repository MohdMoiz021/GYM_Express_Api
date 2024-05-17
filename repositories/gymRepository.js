const Gym = require('../models/Gym');

class GymRepository {
    async create(gym) {
        return await Gym.create(gym);
    }

    async findAll() {
        return await Gym.find();
    }

    async findById(id) {
        return await Gym.findById(id);
    }

    async update(id, gym) {
        return await Gym.findByIdAndUpdate(id, gym, { new: true });
    }

    async delete(id) {
        return await Gym.findByIdAndDelete(id);
    }
}

module.exports = new GymRepository();
