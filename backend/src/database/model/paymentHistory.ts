import { Table, Column, Model, Default, DataType } from 'sequelize-typescript';

@Table
export class PaymentHistory extends Model {
    @Column
    username: string

    @Column({type:DataType.JSON})
    bid : {
        tier:string,
        position:number
    }

    @Column
    amount : number

    @Column({defaultValue:'pending'})
    status: string

    @Column({defaultValue:'Not generated'})
    invoice : string

}

console.log('payment history is OK')