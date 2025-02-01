import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  POSTGRES_DB: string;
  POSTGRES_HOST: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_HOST_PORT: string;
  POSTGRES_CONTAINER_PORT: string;
  CUANDO_LLEGA_BACKEND_HOST_PORT: string;
  CUANDO_LLEGA_BACKEND_CONTAINER_PORT: string;
}

const envsSchema = joi
  .object({
    CUANDO_LLEGA_BACKEND_POSTGRES_DB: joi.string().required(),
    CUANDO_LLEGA_BACKEND_POSTGRES_HOST: joi.string().required(),
    CUANDO_LLEGA_BACKEND_POSTGRES_USER: joi.string().required(),
    CUANDO_LLEGA_BACKEND_POSTGRES_PASSWORD: joi.string().required(),
    CUANDO_LLEGA_BACKEND_POSTGRES_HOST_PORT: joi.string().required(),
    CUANDO_LLEGA_BACKEND_POSTGRES_CONTAINER_PORT: joi.string().required(),
    CUANDO_LLEGA_BACKEND_HOST_PORT: joi.string().required(),
    CUANDO_LLEGA_BACKEND_CONTAINER_PORT: joi.string().required(),
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
  backendHostPort: envVars.CUANDO_LLEGA_BACKEND_HOST_PORT,
  backendContainerPort: envVars.CUANDO_LLEGA_BACKEND_CONTAINER_PORT,
};
