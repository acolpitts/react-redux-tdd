import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map((comment, i) => <li key={i}><span className='bold'>[Guest]:</span> {comment}</li>)
  return (
    <section class="section">
      <h3 class="center">- The Wall -</h3>
      <ul className="comment-list">
        {list}
      </ul>
    </section>
  )
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);