import { Table, Column, Model, Default, DataType } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';

@Table
export class Issues extends Model {
    
    @Column
    reportedby:string

    @Column
    username:string

    @Column
    phoneNumber:string

    @Column
    subject:string

    @Column
    description:string

    @Column({type:DataType.ARRAY(DataType.JSON),defaultValue:[]})
    vote:[
        {
            username:string
            response:boolean
        }
    ]

}

console.log('User Table is OK')