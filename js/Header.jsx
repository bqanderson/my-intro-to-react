const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    handelSearchTermChange: func,
    showSearch: bool,
    searchTerm: string
  },
  handelSearchTermEvent (e) {
    this.props.handelSearchTermChange(e.target.value)
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='Search...'
        value={this.props.searchTerm} onChange={this.handelSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            Video Finder v2.5
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = Header
