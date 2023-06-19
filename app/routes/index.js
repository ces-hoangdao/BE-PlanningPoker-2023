import authRouter from './auths.js';
import siteRouter from './sites.js';
const route = (app) => {
	app.use('/', siteRouter);
	app.use('/auth', authRouter);
};
export default route;
