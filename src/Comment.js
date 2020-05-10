//your code here
import React, { Component } from 'react'
import BlogPostComponent from './BlogPost.js'
export default class Comment extends Component {
    render() {
        return (
          <div className="comment">
            {this.props.commentText}
          </div>  
        )
      }
}