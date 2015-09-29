import { createApiAction, createAction } from 'redux-utils'

let createRedditFetch = createApiAction('REDDIT',function(reddit) {
	return `http://www.reddit.com/r/${reddit}.json`
},'GET')

let selectReddit = createAction('SELECT_REDDIT', 'reddit')

export { selectReddit, createRedditFetch }
