var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div
var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are super cool!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'I got your Props right here.', color: 'burlywood'}),
    ce(MyTitle, {title: 'Props are actually super useful!', color: 'steelblue'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
