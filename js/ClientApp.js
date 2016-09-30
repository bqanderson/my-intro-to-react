var div = React.DOM.div
var h1 = React.DOM.h1
var h2 = React.DOM.h2

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

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
