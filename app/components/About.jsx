var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

//   Refactoring with arrow function

var About = (props) => {
  return (
    <h3>About Component</h3>
  )
};

module.exports = About;
