import express from 'express';
import { ROUTES } from '../../constants/routes';
import { roomController } from '../controllers/room';

const router = express.Router();

router.patch(ROUTES.ROOM.NOMINATE, roomController.nominateVote);
router.post(ROUTES.ROOM.HISTORY, roomController.saveHistory);
router.post('/', roomController.createRoom);

export default router;
