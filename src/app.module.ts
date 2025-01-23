import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://new-user-form:form-password@cluster0.t9goy.mongodb.net/form-details?retryWrites=true&w=majority&appName=Cluster0'),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
