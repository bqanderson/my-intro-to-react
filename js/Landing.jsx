const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('./Store')

// creating this class in ES6 to demo binding in ES6
class Landing extends React.Component {
  constructor (props) {   // constructor used due to ES6 not auto binding.
    super(props)          // this is why most use createClass not ES6 Class

    this.handelSearchTermEvent = this.handelSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }
  handelSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>Video Finder v2.5</h1>
        <form onSubmit={this.gotoSearch}>
          <input value={this.props.searchTerm} onChange={this.handelSearchTermEvent}
            className='search' type='text' placeholder='Search'
          />
        </form>
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
