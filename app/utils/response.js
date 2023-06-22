export const responseUtils = {
  sendError(res, { status, message }) {
    res.status(status).json({ success: false, message });
  },

  sendSuccess(res, { status, sendData }) {
    res.status(status).json({ success: true, data: sendData });
  },
};
