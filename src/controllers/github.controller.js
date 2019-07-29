
const trending = require('trending-github');

module.exports = {

	async listAll(req, resp) {
		let res = await trending('weekly', '');
		return resp.json(res);
	}

}