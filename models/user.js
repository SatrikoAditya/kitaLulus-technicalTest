'use strict';
const {
  Model
} = require('sequelize');
const {
  hashpass
} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Email is Required'
        },
        notEmpty: {
          args: true,
          msg: 'Email is Required'
        },
        isEmail: {
          args: true,
          msg: 'Invalid Email Format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is Required'
        },
        notEmpty: {
          args: true,
          msg: 'Password is Required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeCreate', (user, opt) => {
    user.password = hashpass(user.password)
  })
  return User;
};