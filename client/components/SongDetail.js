import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import query from '../queries/fetchSong'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data
    console.log(this.props)
    if (this.props.data.loading) {
      return <div>Loading</div>
    }
    return (
      <div>
        <h3>Song Detail</h3>
        {song.title}
      </div>
    )
  }
}

export default graphql(query, {
  options: ({ params }) => {
    return { variables: { id: params.id } }
  }
})(SongDetail)
