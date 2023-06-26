import express from 'express';
import { ROUTES } from '../../constants/routes';
import { roomController } from '../controllers/room';

const router = express.Router();

/**
 * @swagger
 * /room/nominate:
 *   post:
 *     summary: Nominate vote
 *     tags: [room]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomId:
 *                 type: string
 *                 description: The ID of room
 *                 example: 649909f49a96cb5a197ce741
 *               user:
 *                 type: string
 *                 description: The ID of user
 *                 example: 6494131fe94cdbd901f3372b
 *               vote:
 *                 type: string
 *                 description: The value of vote
 *                 example: 'coffee'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: response success or not
 *                   example: true
 *                 data:
 *                   type: string
 *                   description: response message
 *                   example: Save user voting successfully
 *       404:
 *         description: NOT_FOUND
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: response success or not
 *                   example: false
 *                 data:
 *                   type: string
 *                   description: response message
 *                   example: User is not in room
 *       500:
 *         description: INTERNAL_SERVER_ERROR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: response success or not
 *                   example: false
 *                 data:
 *                   type: string
 *                   description: response message
 *                   example: Internal Server Error
 */
router.patch(ROUTES.ROOM.NOMINATE, roomController.nominateVote);
router.get(ROUTES.ROOM.GET_ROOM, roomController.getRoomById);

/**
 * @swagger
 * /room/history:
 *   post:
 *     summary: Save voting history
 *     tags: [room]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/History'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: response success or not
 *                   example: true
 *                 data:
 *                   type: string
 *                   description: response message
 *                   example: Save history successfully
 *       500:
 *         description: INTERNAL_SERVER_ERROR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: response success or not
 *                   example: false
 *                 data:
 *                   type: string
 *                   description: response message
 *                   example: Internal Server Error
 */
router.post(ROUTES.ROOM.HISTORY, roomController.saveHistory);
router.post('/', roomController.createRoom);

export default router;
