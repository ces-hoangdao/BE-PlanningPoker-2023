import siteRouter from './sites.js';
import authRouter from './auths.js';

const route = (app) => {
    app.use('/', siteRouter);
    app.use('/auth', authRouter);
};

export default route;
