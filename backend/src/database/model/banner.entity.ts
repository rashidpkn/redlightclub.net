import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class Banners extends Model{
    @Column
    username:string

    @Column
    url:string

    @Column
    status:boolean

    @Column({defaultValue:0})
    credit : number
}
console.log('Banners Table is OK')