const User = require('../models/UserModel');

module.exports = {
    create: async (data) => {
        try {
            let user = new User(data);
            let result = await user.save();
            return { success: true, result: result };
        } catch(err) {
            return { success: false, result: err };
        }
    },
    findByEmail: async (email) => {
        try {
            let result = await User.findOne({ where: { email: email } });
            if (result == null) {
                return { success: false, result: "Result not found!"};
            } else {
                return { success: true, result: result }
            }
        } catch(err) {
            return { success: false, result: err };
        }
    },
    updateByEmail: async (email, data) => {
        try {
            let user = new User(data);
            let result = await User.update(user.dataValues,{
                where: {email: email}
            });
            return { success: true, result: result };
        } catch(err) {
            return { success: false, result: err };
        }
    },
    deleteByEmail: async (email) => {
        try {
            let result = await User.destroy({ where: { email: email } });
            return { success: true, result: result };
        } catch(err) {
            return { success: false, result: err};
        }
    }
}
