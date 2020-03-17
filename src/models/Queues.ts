import { DataTypes, Model } from 'sequelize'
import Init from './Init'


class Queues extends Model
{
    protected static readonly table_name = "queues"

    public id: number
    public operator!: string
    public number: number
    public time: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    
    protected static attrRules(): object{
        return {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            operator: {
                type: DataTypes.STRING,
                allowNull: false
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            time: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    }
}
Init(Queues)
export default Queues