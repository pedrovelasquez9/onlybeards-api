import {
  AllowNull,
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { CreationFields } from './CreationFieldsInterface';
import { Users } from './Users';

@Table
export class BeardType extends Model<CreationFields> {
  @PrimaryKey
  @AutoIncrement
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  description: string;

  @AllowNull(false)
  @Column
  image: string;

  @AllowNull(false)
  @Column
  status: boolean;

  @HasMany(() => Users)
  users: Users[];
}
