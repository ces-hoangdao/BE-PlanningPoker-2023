const mongoose = require('mongoose');
async function DBConnect() {
	try {
		await mongoose.connect(
			'mongodb+srv://cesintern:cesintern@planningpoker.pnx40d5.mongodb.net/Poker'
		);
		console.log('Connect database successfully');
	} catch (error) {
		console.log(error);
	}
}
module.exports = { DBConnect };
