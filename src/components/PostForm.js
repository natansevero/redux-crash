import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    handleFieldChange(event) {
        this.setState({ [ event.target.name ] : event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.newPost(post);
    }
  
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title: </label> <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.handleFieldChange.bind(this)} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label> <br />
                        <textarea name="body" value={this.state.body} onChange={this.handleFieldChange.bind(this)} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    newPost: PropTypes.func.isRequired
}

// const mapStateToProps = (state) => {
//     return  {
//         newPost: state.posts.item
//     }
// }

export default connect(null, { newPost })(PostForm);