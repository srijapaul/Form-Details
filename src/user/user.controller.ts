import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get('')
    getUser(){
        return this.userService.getUser();
    }
    @Post('')
    createUser(@Body()user){
        return this.userService.createUser(user);
    }
    @Put(':id')
    editUser(@Param('id')id,@Body()user){
        return this.userService.editUser(id,user);
    }
    @Delete(':id')
    deleteUser(@Param('id')id){
        return this.userService.deleteUser(id);
    }
    @Get('save-details')
    getSavedDetails() {
      return this.userService.getSavedDetails();
    }
  
    @Get('delete-details')
    getDeletedDetails() {
      return this.userService.getDeletedDetails();
    }

}
