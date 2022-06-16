import axios from 'axios'
import {logout} from './Auth'

export const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || '/api',
    withCredentials: true,
    headers: {
        Authorization: localStorage.getItem(`jwt_token`)
    }    
})

// Handle errors from API request
export const errorHandler = (error, handler = {}) => {
	// Set default handler for unauthorized - 401
	handler['401'] = () => {logout()}
	// Set default handler for bad input - 400
	handler['400'] = handler['400'] ? handler['400'] : () => {
		alert(error.response.data.message)
	}	
	// Set default handler for server error - 500
	handler['500'] = handler['500'] ? handler['500'] : () => {
		alert(error.response.data.message)
	}
	// Call the handler if exists
	const statusCode = error.response.status.toString()
	if(handler[statusCode]){
		handler[statusCode]()
	}
	else{
		alert(error.response.data.message)
	}
}

/**
 * Get the query string from key-value pairs of queries
 * @param {object} queries - Key-value pairs of the queries
 * @returns {string}
 */

export const getQueryString = (queries) => {
	let arrString = []
	for(const key in queries){
		arrString.push(`${key}=${queries[key]}`)
	}
	return arrString.length ? `?${arrString.join('&')}` : ''
}

export function getBaseName(fileUrl){
	return fileUrl.replace(/.*\//, '');
}

/**
 * 
 * @param {event} e 
 * @param {string} targetKey
 * @param {function} callback 
 */

export function keyHandler(e, targetKey, callback){
	if(e.key === targetKey){ callback() }
}