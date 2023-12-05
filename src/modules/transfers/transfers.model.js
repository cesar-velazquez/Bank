import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';

//hacer importación de sequelize",

const transfers = sequelize.define('transfers', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    ammount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    senderUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiverUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
export default transfers