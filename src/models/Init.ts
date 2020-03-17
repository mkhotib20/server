import sequelize from '../config/db'

export default (Model: any): void => {
    Model.init(Model.attrRules(), {    
        sequelize,
        timestamps: true,
        tableName: Model.table_name
    })
}