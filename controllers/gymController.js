const gymRepository = require('../repositories/gymRepository');

class GymController {
    async create(req, res) {
        try {
            const gym = {
                name: req.body.name,
                location: req.body.location,
                description: req.body.description,
                price: req.body.price,
                inStock: req.body.inStock,
            };
            if (req.file) {
                gym.photo = req.file.path;
            }
            const newGym = await gymRepository.create(gym);
            res.status(201).json(newGym);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const gyms = await gymRepository.findAll();
            res.status(200).json(gyms);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const gym = await gymRepository.findById(req.params.id);
            if (!gym) {
                return res.status(404).json({ message: 'Gym not found' });
            }
            res.status(200).json(gym);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const gym = {
                name: req.body.name,
                location: req.body.location,
                description: req.body.description,
                price: req.body.price,
                inStock: req.body.inStock,
            };
            if (req.file) {
                gym.photo = req.file.path;
            }
            const updatedGym = await gymRepository.update(req.params.id, gym);
            if (!updatedGym) {
                return res.status(404).json({ message: 'Gym not found' });
            }
            res.status(200).json(updatedGym);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deletedGym = await gymRepository.delete(req.params.id);
            if (!deletedGym) {
                return res.status(404).json({ message: 'Gym not found' });
            }
            res.status(200).json({ message: 'Gym deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new GymController();
