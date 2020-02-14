import { Table, Column, Model, HasMany, BelongsTo, ForeignKey, BeforeSave } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import to from 'await-to-js';
import { ENV } from '../config';

@Table({timestamps: true})
export class User extends Model<User> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @Column
  name: string;

  @Column({unique: true})
  email: string;

  @Column
  phoneNumber: string;

  @Column
  address: string;

  @Column
  zipCode: string;

  @Column
  fileName: string;
}