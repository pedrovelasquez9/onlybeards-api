import { Injectable } from '@nestjs/common';
import {
  SequelizeOptionsFactory,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'mysql',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
    };
  }
}
