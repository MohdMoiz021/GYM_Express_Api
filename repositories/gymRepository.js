const Gym = require('../models/Gym');

class GymRepository {
    async create(gym) {
        return await Gym.create(gym);
    }

    async findAll(page) {
        const rowsToSkip=(page-1)*10
        return await Gym.find({},
            {updatedDate:0,createdData:0,__v:0}
        ).skip(rowsToSkip)
        .limit(10);
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

    // async getCount(){
    //   return Gym.count()
    // }
}

module.exports = new GymRepository();
