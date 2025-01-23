import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import User from './schemas/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class UserService {
   constructor(
    @InjectModel(User.name) private userModel:mongoose.Model<User>
   ){}
    async getUser(){
        const user=await this.userModel.find()
        return user;
    }
    async createUser(userDetails){
        const user= await this.userModel.create(userDetails)
        return user;
    }
    async editUser(id, user){
        const editedUser=await this.userModel.findByIdAndUpdate(id,user)
        return editedUser
    }
    async deleteUser(id){
        const deletedUser=await this.userModel.findByIdAndDelete(id)
        return deletedUser
    }
    async getSavedDetails() {
        const savedDetails = await this.userModel.find({ deleted: false }).exec();
        return savedDetails;
      }
    
      async getDeletedDetails() {
        const deletedDetails = await this.userModel.find({ deleted: true }).exec();
        return deletedDetails;
      }
}
