'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Question.init({
    uuid: DataTypes.UUID,
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Question is Required'
        },
        notEmpty: {
          args: true,
          msg: 'Question is Required'
        }
      }
    },
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'isActive is Required'
        },
        notEmpty: {
          args: true,
          msg: 'isActive is Required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};