/* eslint-disable prettier/prettier */
import * as Joi from 'joi';

const ConfigModuleValidation = Joi.object({
  APP_PORT: Joi.number().integer().required(),
  REACT_ORIGIN: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().integer().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE_NAME: Joi.string().required(),
});

export default ConfigModuleValidation;
