import React from 'react'

class GifSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state.searchTerm)
    this.setState({
      searchTerm: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="search for a gif" value={this.state.searchTerm} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default GifSearch
