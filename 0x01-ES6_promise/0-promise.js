export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve('Response from API');
			} catch (error) {
				reject(error);
			}
		}, 1000);
	});
}
