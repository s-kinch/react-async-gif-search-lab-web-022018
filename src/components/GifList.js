import React from 'react'

const GifList = (props) => {
  const gifs = props.gifs.map(gif => (<li key={gif.id}><img alt="a gif" src={gif.images.fixed_width.url.split('?')[0]}/></li>))

  return (
    <ul>
      {gifs}
    </ul>
  )
}

export default GifList
