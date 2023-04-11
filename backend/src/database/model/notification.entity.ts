import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class Notification extends Model{
    @Column
    message : string

    @Column
    type : string

    @Column
    role : string

}
console.log('Notification Table is OK')