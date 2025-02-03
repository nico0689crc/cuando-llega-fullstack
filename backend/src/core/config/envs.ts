import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  POSTGRES_DB: string;
  POSTGRES_HOST: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_HOST_PORT: string;
  POSTGRES_CONTAINER_PORT: string;
  HOST_PORT: string;
  CONTAINER_PORT: string;
}

const envsSchema = joi
  .object({
    POSTGRES_DB: joi.string().required(),
    POSTGRES_HOST: joi.string().required(),
    POSTGRES_USER: joi.string().required(),
    POSTGRES_PASSWORD: joi.string().required(),
    POSTGRES_HOST_PORT: joi.string().required(),
    POSTGRES_CONTAINER_PORT: joi.string().required(),
    HOST_PORT: joi.string().required(),
    CONTAINER_PORT: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  postgresDb: envVars.POSTGRES_DB,
  postgresHost: envVars.POSTGRES_HOST,
  postgresUser: envVars.POSTGRES_USER,
  postgresPassword: envVars.POSTGRES_PASSWORD,
  postgresHostPort: envVars.POSTGRES_HOST_PORT,
  postgresContainerPort: envVars.POSTGRES_CONTAINER_PORT,
  backendHostPort: envVars.HOST_PORT,
  backendContainerPort: envVars.CONTAINER_PORT,
};
