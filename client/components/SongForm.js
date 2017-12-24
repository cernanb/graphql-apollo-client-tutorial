import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import query from '../queries/fetchSongs'

class SongForm extends Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }

    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query }]
      })
      .then(() => hashHistory.push('/'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <h3>Create a new Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Song Title: </label>
          <input
            onChange={this.handleChangeText}
            type="text"
            name="title"
            value={this.state.title}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`

export default graphql(mutation)(SongForm)
