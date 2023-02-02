const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "products",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      namedisplay: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      imageurl: {
        type: DataTypes.TEXT,
      },

      trademark: {
        type: DataTypes.TEXT,
        //   ([
        //   "asus",
        //   "Thermaltake",
        //   "Deepcool",
        //   "Gamemax",
        //   "Redragon",
        //   "Corsair",
        //   "Seasonic",
        //   "BeQuiet",
        //   "Mercusys",
        //   "TP-Link",
        //   "Kaze",
        // ]),
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      category: {
        type: DataTypes.STRING,
        unique: true,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      disabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
