const axios = require('axios')

module.exports = {

	async listAll(req, resp) {
		const res = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bd0989058e6c4052ae61c35e7e4b27d6');
		console.log(res.data);
		// let res = { ...articles } = response
		return resp.json(res.data);
	}

}