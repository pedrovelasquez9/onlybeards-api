import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { BeardType } from './BeardType';
import { CreationFields } from './CreationFieldsInterface';

@Table
export class Users extends Model<CreationFields> {
  @PrimaryKey
  @AutoIncrement
  id: number;

  @AllowNull(false)
  @Column
  fullName: string;

  @AllowNull(false)
  @Column
  username: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @ForeignKey(() => BeardType)
  @Column
  idBeardType: number;

  @BelongsTo(() => BeardType)
  beardType: BeardType;

  @Column
  profile_picture: string;

  @Column
  bio_text: string;

  @Column
  profile_link: string;

  @Column
  beard_rutine: string;

  @Column({ defaultValue: true })
  status: boolean;
}
