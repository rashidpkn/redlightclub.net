import { Injectable } from '@nestjs/common';
import { Ads } from 'src/database/model/ads.entity';

@Injectable()
export class AdsService {
    async create(ads: JSON, username: string, email: string,region:string) {
        try {
            const data = await Ads.create({ ...ads, username, email,region })

            
            return ({
                status: true,
                reason: 'Ads is created',
                data    
            })
           
            
        } catch (error) {
            console.log(error.message)
            return ({
                status: false,
                reason: error.message
            })
        }

    }

    async writeReview(id:number,username:string,rating:number,title:string,desc : string){
        const found = await Ads.findOne({where:{id}})
        
        if(found){
          const {review} = found
          await Ads.update({review:[...review,{username,rating,title,desc}]},{where:{id}})
        }
        return true
    
      }
}
