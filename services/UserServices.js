const User = require('../models/UserModel');

module.exports = {
    create: async (data) => {
        let user = new User(data);
        try {
            let result = await user.save();
            return { success: true, result: result };
        } catch(err) {
            return { success: false, result: err };
        }
    },
    findById: async (id) => {
        try {
            let result = User.findOne({ where: { id: id } });
            return { success: true, result: result };
        } catch(err) {
            return { success: false, result: err };
        }
    }
}
