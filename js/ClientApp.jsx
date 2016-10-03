var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle.jsx')

var MyFirstComponent = function() {
  return (
    <div>
      <MyTitle title="Whateves..." color="rebeccapurple" />
      <MyTitle title="HI everybody!" color="#f06d06" />
      <MyTitle title="Well, look what we have here." color="burlywood" />
    </div>
  )
}


ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
