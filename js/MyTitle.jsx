var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
  const style = {color: this.props.color}
    return (
      <div>
        {/* {} are needed to tell jsx that this is an expression */}
        <h1 style={ style }>
        {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
