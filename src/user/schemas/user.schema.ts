import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
      return ret;
    },
  },
})
export default class User extends Document {
  @Prop()
  id: number;
  @Prop()
  firstname: string;
  @Prop()
  lastname: string;
  @Prop()
  middlename: string;
  @Prop()
  address: string;
  @Prop()
  email: string;
  @Prop()
  phoneNo: number;
  @Prop()
  height: number;
  @Prop()
  weight: number;
  @Prop({ default: false })
  deleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);