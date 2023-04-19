import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class Supports extends Model{
   @Column
   username:string

   @Column
   email:string

   @Column
   type:string

   @Column
   subject:string

   @Column
   detail:string

   @Column
   response : string

   @Column({type:DataType.ARRAY(DataType.STRING)})
   images : [string]

   @Column({defaultValue:false})
   status:boolean
}
console.log('Supports Table is OK')