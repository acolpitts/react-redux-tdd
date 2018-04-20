import React, { Component } from 'react';
import CommentBox from './comment-box';
import CommentList from './comment-list';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <CommentList/>
        </div>
        <CommentBox/>
      </div>

    );
  }
}
