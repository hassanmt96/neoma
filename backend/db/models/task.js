'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Task.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    deadline: DataTypes.DATE,
    projectId: DataTypes.INTEGER,
    creatorId: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    assignedtoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};