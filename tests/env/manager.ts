import { config } from 'dotenv';
import { join } from 'path';

const env = (process.env.ENV || 'LOCAL').toLocaleLowerCase();

config({ path: join(process.cwd(), 'tests', 'env', `${env}.env`) });

export const ENV = {
    BASE_URL: process.env.BASEURL as string
};