import Immutable from 'immutable'

let CONSTRUCT = () => {
	return Immutable.fromJS({
		selected: 'reactjs',
		isFetching: false,
		posts: []
	})
}

let REDDIT_REQUEST = (domain, action) => {
	return domain.update('isFetching', v => true)
}

let REDDIT_SUCCESS = (domain, action) => {
	let posts = action.payload.data.children.map(child => child.data)
	return Immutable.fromJS({
			selected: domain.get('selected'),
			isFetching: false,
			posts: posts
		})
}

let REDDIT_FAILURE = (domain, action) => {
	return domain.update('isFetching', v => false)
}

let SELECT_REDDIT = (domain, action) => {
  return domain.update('selected', v => action.payload.reddit)
}

export { CONSTRUCT, REDDIT_FAILURE, REDDIT_REQUEST, REDDIT_SUCCESS, SELECT_REDDIT }