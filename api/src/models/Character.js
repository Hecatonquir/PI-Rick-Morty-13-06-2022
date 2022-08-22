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
				allowNull: false,
			},
			origin: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			created: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
			apiEpisodes: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
			},
		},
		{ timestamps: false }
	);
};
