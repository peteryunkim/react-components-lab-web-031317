const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className: "oldercoaster"},
      [
        React.createElement('p', {}, 'Two grannies having the time of their life!'),
        React.createElement('p', {}, 'Passengers:'),
        React.createElement('ul', {}, 
          [
            React.createElement('li', {}, 'Agnes'),
            React.createElement('li', {}, 'Muriel')
          ]
        )
      ])
  }
})

class InFrontOfYou extends React.Component {
  render(){
    return React.createElement('div', {}, 
      [
        React.createElement('p', {}, 'You shouldn\'t look too far.'),
        React.createElement('p', {}, 'Sometimes, the solution is ', [
            React.createElement('strong', {}, 'right in front of you.')
          ])
      ])
  }
}

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// const products = BUTCHER_PRODUCTS.map(function(meat){
//   return React.createElement('li', {}, meat)
// })

const products = BUTCHER_PRODUCTS.map(meat => React.createElement('li', {}, meat))

class ButcherShop extends React.Component {
  render(){
    return React.createElement('div', {className: "butcher-shop"},
      [
        React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
        React.createElement('ul', {}, products)
      ])
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);

