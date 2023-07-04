import { registerAs } from '@nestjs/config';

export const AppConfig = registerAs('app', () => {
  return {
    app_env: process.env.NODE_ENV || 'development',
    port: process.env.PORT,
    globalPrefix: process.env.GLOBAL_PREFIX || 'api',
    jwt_secret_key: process.env.JWT_SECRET,
  };
});
