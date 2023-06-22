import authRouter from './auths.js';
import siteRouter from './sites.js';

const route = (app) => {
  app.use('/auth', authRouter);
  app.use('/', siteRouter);
};
export default route;
