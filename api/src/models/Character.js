const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'character',
		{
			id: {
				primaryKey: true,
				allowNull: false,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			apiId: {
				type: DataTypes.INTEGER,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			species: {
				type: DataTypes.STRING,
			},
			origin: {
				type: DataTypes.STRING,
			},
			image: {
				type: DataTypes.TEXT,
			},
			created: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{ timestamps: false }
	);
};
