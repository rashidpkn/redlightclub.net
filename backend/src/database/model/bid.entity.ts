import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Bid extends Model{
    @Column
    position : number

    @Column
    tier  : string

    @Column ({ type:DataType.ARRAY(DataType.JSON),defaultValue:[]})
    bid : [
        {
            username:string,
            amount:number,
        }
    ]

    @Column({defaultValue:50})
    largestBidAmount : number

    @Column({defaultValue:"close"})//open , close , 
    status : string

}

console.log('Bid Table is OK');