import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LyricForm extends Component {
  constructor() {
    super()

    this.state = {
      content: ''
    }
  }

  submit(e) {
    e.preventDefault()
    this.props
      .mutate({
        variables: { content: this.state.content, songId: this.props.songId }
      })
      .then(() => this.setState({ content: '' }))
  }

  handleChange(e) {
    this.setState({ content: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <label>Add a lyric</label>
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.content}
          type="text"
        />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`

export default graphql(mutation)(LyricForm)
