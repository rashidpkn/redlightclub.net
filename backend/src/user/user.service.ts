import { Injectable } from '@nestjs/common';
import { User } from 'src/database/model/user.entity';

@Injectable()
export class UserService {
  create = async (username: string, email: string, password: string, role: string,referredby :string) => {
    try {
      const foundUsername = await User.findOne({ where: { username } });
      const foundEmail = await User.findOne({ where: { email} });
      if (foundUsername || foundEmail) {
        return {
          status: false,
          reason: 'User already exist',
        };
      } else {
        await User.create({ username, email, password, role ,referredby });
        if(referredby){
          const {referredto } = await User.findOne({where:{username:referredby}})
          await User.update({referredto:[...referredto,{username,date:new Date()}]},{where:{username:referredby}})
        }

        return {
          status: true,
          reason: 'User is created',
          token: 'asdfgjkl',
          role: role,
        };
      }
    } catch (error) {
      return {
        status: false,
        reason: error.message,
      };
    }
  };

  login = async (email: string, password: string) => {
    try {
      const found = await User.findOne({ where: { email} });

      if (found?.password === password) {
        return {
          status: true,
          reason: '',
          token: 'asdfgjkl',
          role: found.role,
          username: found.username
        };
      }else if(found){
        return {
          status: false,
          reason: 'Please Check Your Password',
        };
      }
       else {
        return {
          status: false,
          reason: 'We have no registered user with this email account',
        };
      }
    } catch (error) {
      return {
        status: false,
        reason: error.message,
      };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  delete = async () => { };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  verify = async () => { };
}
