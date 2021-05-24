const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const moment = require("moment");

class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    flight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lodging: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    food: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    beverage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    additional_activities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_time: {
        type: DataTypes.TIME,
        get: function() {
            return moment(this.getDataValue('start_time'), "hh:mm:ss").format('hh:mm A');
          }
    },
    end_time: {
        type: DataTypes.TIME,
        get: function() {
            return moment(this.getDataValue('end_time'), "hh:mm:ss").format('hh:mm A');
          }
    },
    category: {
        type: DataTeypes.STRING,
        allowNull: true
    },
    trip_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "trip",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "activity",
  }
);

module.exports = Activity;
