const axios = require('axios')

module.exports = {

	async listAll(req, resp) {
		const res = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bd0989058e6c4052ae61c35e7e4b27d6');
		return resp.json(res.data);
	}

}