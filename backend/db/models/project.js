'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
   Project.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Project.init({
    name: { type: DataTypes.STRING(50), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false},
    status: { type: DataTypes.BOOLEAN, allowNull:false },
    userId: {type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};