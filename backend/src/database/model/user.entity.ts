import { Table, Column, Model, Default, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    username: string

    @Column
    email: string

    @Column
    password: string


    @Column({ defaultValue: 'user' })
    role: string


    @Column({ defaultValue: false })
    verified: boolean

    @Column({defaultValue:0})
    credit:number

    @Column({defaultValue:false})
    due:boolean

    @Column({defaultValue:0})
    dueAmount:number

    @Column({type:DataType.ARRAY(DataType.JSON),defaultValue:[]})
    bid:[{
        tier:string,
        position:number
    }]

    @Column
    referredby:string

    @Column({type:DataType.ARRAY(DataType.JSON),defaultValue:[]})
    referredto:[
            username:string,
            amount:string,
            date:string
    ]

}

console.log('User Table is OK')