import express from 'express';
import { ROUTES } from '../../constants/routes';
import { roomController } from '../controllers/room';

/**
 * @swagger
 * tags:
 *   name: room
 *   description: The books managing API
 */
const router = express.Router();

/**
 * @swagger
 * paths:
 *   '/room':
 *     post:
 *       summary: 'Create room'
 *       tags: [room]
 *       requestBody:
 *         required: true
 *         content:
 *           'application/json':
 *             schema:
 *               type: object
 *               properties:
 *                 roomName:
 *                   type: string
 *       responses:
 *         200:
 *           description: 'return user info in data'
 *           content:
 *             'application/json':
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   data:
 *                     $ref: '#/components/schemas/Room'
 */
router.post(ROUTES.ROOT.PATH, roomController.createRoom);

/**
 * @swagger
 * paths:
 *   '/room':
 *     get:
 *       summary: 'Get room by id'
 *       tags: [room]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: 'id attached in url when getting'
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: 'return room info in data'
 *           content:
 *             'application/json':
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   data:
 *                     $ref: '#/components/schemas/Room'
 */
router.get(ROUTES.ROOM.GET_ROOM, roomController.getRoomById);

/**
 * @swagger
 * paths:
 *   '/room/nominate':
 *     patch:
 *       summary: 'API for user when nominate for voting'
 *       tags: [room]
 *       requestBody:
 *         required: true
 *         content:
 *           'application/json':
 *             schema:
 *               type: object
 *               properties:
 *                 roomId:
 *                   type: string
 *                   example: 64a2435e4da414370b6bcc19
 *                 user:
 *                   type: string
 *                   example: 649d259bd32d0a9ce5acfc0d
 *                 vote:
 *                   type: string
 *                   example: "coffee"
 *       responses:
 *         200:
 *           description: 'return message if the vote data is saved'
 *           content:
 *             'application/json':
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   message:
 *                     type: string
 *                     example: 'Save user voting successfully'
 */
router.patch(ROUTES.ROOM.NOMINATE, roomController.nominateVote);

export default router;
