import { DataTypes, Model, ModelType } from 'sequelize'
import Init from './Init'

class Antrian extends Model
{
    protected static readonly table_name = "antrian"

    public id: number
    public name!: string
    public status: number
    public position: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    protected static attrRules(){
        return {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nama: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            posisi: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    }
}
Init(Antrian)
export default Antrian 