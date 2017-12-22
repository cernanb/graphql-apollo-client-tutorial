import React, { Component } from 'react'

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

  render() {
    return (
      <div>
        <h3>Create a new Song</h3>
        <form onSubmit={this.handleSubmit}>
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

export default SongForm
