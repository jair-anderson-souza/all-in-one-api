
const trending = require('trending-github');

module.exports = {

	async listAll(req, resp) {
		let res = await trending('weekly', '');
		console.log(res);
		return resp.json(res);
	}

}