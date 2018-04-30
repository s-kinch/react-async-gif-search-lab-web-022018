import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const baseURL = 'http://api.giphy.com/v1/gifs/search?q='
const APIKey = '&api_key=dc6zaTOxFJmzC'

class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  handleSearch = (searchTerm) => {
    fetch(baseURL + searchTerm + APIKey)
    .then(res => res.json())
    .then(res => {
      this.setState({
        gifs: res.data.slice(0, 3)
      })
    })
  }

  render(){
    console.log(this.state.gifs)
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer
