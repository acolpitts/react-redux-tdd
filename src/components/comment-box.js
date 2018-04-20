import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box grey darken-3" style={{marginTop: '20px'}}>
        <h6 className="white-text">Leave a comment</h6>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
        <div>
          <button type="submit" className="btn deep-orange" disabled={this.state.comment.length < 1}>post</button>
        </div>
      </form>
    )
  }
}


export default connect(null, actions)(CommentBox);