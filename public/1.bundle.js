webpackJsonp([1],{

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(175);
	var Link = ReactRouter.Link;
	var browserHistory = ReactRouter.browserHistory;

	var Store = __webpack_require__(238);
	var connector = Store.connector;

	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);

	  function Landing(props) {
	    _classCallCheck(this, Landing);

	    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));

	    _this.handleTermEvent = _this.handleTermEvent.bind(_this);
	    _this.goToSearch = _this.goToSearch.bind(_this);
	    return _this;
	  }

	  _createClass(Landing, [{
	    key: 'handleTermEvent',
	    value: function handleTermEvent(e) {
	      this.props.setSearchTerm(e.target.value);
	    }
	  }, {
	    key: 'goToSearch',
	    value: function goToSearch(e) {
	      browserHistory.push('search');
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'home-info' },
	        React.createElement(
	          'h1',
	          { className: 'title' },
	          'Video Finder v2.5'
	        ),
	        React.createElement(
	          'form',
	          { onSubmit: this.goToSearch },
	          React.createElement('input', { onChange: this.handleTermEvent, className: 'search', type: 'text', value: this.props.searchTerm, placeholder: 'Search' })
	        ),
	        React.createElement(
	          Link,
	          { to: '/search', className: 'browse-all' },
	          'or Browse All'
	        )
	      );
	    }
	  }]);

	  return Landing;
	}(React.Component);

	Landing.propTypes = {
	  setSearchTerm: React.PropTypes.func,
	  searchTerm: React.PropTypes.string
	};

	module.exports = connector(Landing);

/***/ }

});