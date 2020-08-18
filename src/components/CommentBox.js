import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };
  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-button" onClick={this.props.fetchComment}>Fetch comment</button>
      {/* fetchComment is a method of action , we have conected action to
      commentBox so we get it from "this.props" */}
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
