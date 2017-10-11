import key from '../newsApi';
import { GET_ARTICLES_SUCCESS } from './actionTypes';

const formatArticleResponse = (articles=[]) => {
	return articles.map(({ author, title, description, url, urlToImage, publishedAt }) => {
		return {
			author,
			title,
			description,
			date: publishedAt,
			imageUri: urlToImage,
			articleUrl: url
		};
	});
};

const fetchNewsArticles = (source) => {
	const options = {
		method: 'GET'
	};
	const ARTICLES_URL =
		`https://newsapi.org/v1/articles?source=${source}&apiKey=${key}&sortBy=latest`;

	return dispatch => {
		return fetch(ARTICLES_URL, options)
			.then(res => res.json())
			.then(resObj => {
				const formattedArticles = formatArticleResponse(resObj.articles);
				return dispatch({
						type: GET_ARTICLES_SUCCESS,
						payload: formattedArticles
					});
			})
			.catch(err => {
				return console.warn('error getting articles', err);
			});
	}
};

export const getNewsArticles = source => dispatch => {
	return dispatch(fetchNewsArticles('techcrunch'));
};
