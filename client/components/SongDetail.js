import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import query from '../queries/fetchSong'
import { Link } from 'react-router'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data
    if (!song) {
      return <div />
    }
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    )
  }
}

export default graphql(query, {
  options: ({ params }) => {
    return { variables: { id: params.id } }
  }
})(SongDetail)
