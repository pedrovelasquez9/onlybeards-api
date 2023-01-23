import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class Users extends Model {
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

  @Column
  id_beard_type: number;

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

  @AllowNull(false)
  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @Column
  created_by: number;

  @Column
  updated_by: number;
}
