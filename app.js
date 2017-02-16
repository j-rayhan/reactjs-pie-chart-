import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// var Composite = require('./components/composite.jsx');
var Pie = require('./components/pie');

var Header = React.createClass({
	render(){
		return (
				<header>
          <div>Hello World</div>
				</header>
			);
	}
});

var Footer = React.createClass({
	render(){
		return(
			<footer>
				<div className="container">
          <p>created By <a href="http://www.freecodecamp.com/jrayhan">jrayhan@odduu.com</a> ***</p>
				</div>
			</footer>
			);
	}
});


class Application extends React.Component {
  render() {
    return <div>
      <Header />
<Pie />
      <Footer />
    </div>;
  }
}


ReactDOM.render(
  <Application />,
  document.getElementById('app')
);