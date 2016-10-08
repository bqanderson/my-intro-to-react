const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = React.createClass({
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Vido Finder v2.1</h1>
          <input className='search-input' type='text' placeholder='Search...' />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
