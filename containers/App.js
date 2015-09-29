import RedditSelector from '../selectors/RedditSelectors'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createRedditFetch, selectReddit } from '../actions/RedditActions'
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selected } = this.props;
    dispatch(createRedditFetch(selected));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      const { dispatch, selected } = nextProps;
      dispatch(createRedditFetch(selected));
    }
  }

  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit));
  }

  handleRefreshClick(e) {
    e.preventDefault();
    const { dispatch, selected } = this.props;
    dispatch(createRedditFetch(selected));
  }

  render() {
    const { posts, isFetching, selected } = this.props;
    return (
      <div>
        <button onClick={this.handleRefreshClick}>Refresh</button>
        <Picker value={selected}
                onChange={this.handleChange}
                options={['reactjs', 'frontend']} />
          { isFetching ? 
            <h1>Loading</h1>:
            <div>
              <Posts posts={posts.toJS()} />
            </div>
          }
      </div>
    );
  }
}

App.propTypes = {
  selected: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(RedditSelector)(App);
