import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import mongoose, { HydratedDocument } from 'mongoose';
import { Pavilion } from 'src/modules/pavilions/schemas/pavilion.schemas';

export type RoomDocument = HydratedDocument<Room>;

@Schema({ timestamps: true })
export class Room {
  @Prop({ required: true })
  label: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Pavilion.name,
  })
  @Expose({ name: 'pavilion' })
  pavilion: Pavilion;

  constructor(partial?: Partial<Room>) {
    Object.assign(this, partial);
  }
}

export const RoomSchema = SchemaFactory.createForClass(Room);
