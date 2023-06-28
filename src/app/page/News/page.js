const News = async () => {
const url = 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3CREQUIRED%3E';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '540aee91d0msh2df835ff81b3c91p146017jsn08b158f46d12',
		'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    return (
        <>
        </>
    );
};

export default News;