//Ew es5

var redditSelector = function (state) {
 return state.get('reddits')
}

module.exports = function (state) {
	return {
		selected: redditSelector(state).get('selected'),
		isFetching: redditSelector(state).get('isFetching'),
		posts: redditSelector(state).get('posts')
	}
}