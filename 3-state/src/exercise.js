////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// 1. Render a tab for each country with its name in the tab
// 2. Add some state to check against while rendering the tabs to
//    indicate which one is active (don't worry about click
//    handlers yet!)
// 3. Use that same state to decide which panel to render
// 4. Add click handlers to the tabs to change the state
//
// BONUS!
//
// 5. Come up with your own data and render another set of
//    tabs
// 6. Render the second set of tabs INSIDE THE PANEL OF THE
//    FIRST TABS!
////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

let styles = {}

let countries = [
  { id: 1, name: 'USA', description: 'Land of the Free, Home of the brave' },
  { id: 2, name: 'Brazil', description: 'Sunshine, beaches, and Carnival' },
  { id: 3, name: 'Russia', description: 'World Cup 2018!' },
  { id: 4, name: 'Germany', description: 'Historical Home' }
]

const CountryPanel = ({ country }) => {
  return (
    <div>
      <h3>{country.name}</h3>
      <p>{country.description}</p>
    </div>
  )
}

const Sample = () => {
  const [count, setCount] = useState(0)
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      Name {count}
    </button>
  )
}

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 1
    }
  }

  changeTab(tabNumber) {
    console.log('tab clicked', this.state.selectedTab)
    this.setState({ selectedTab: tabNumber })
  }

  render() {
    return (
      <div>
        {countries.map(country => {
          return (
            <button
              onClick={e => this.changeTab(country.id)}
              key={country.id}
              style={this.state.selectedTab === country.id ? styles.activeTab : styles.tab}
            >
              {country.name}
            </button>
          )
        })}
        <div style={styles.panel}>
          {countries
            .filter(country => country.id === this.state.selectedTab)
            .map(country => {
              return <CountryPanel key={country.id} country={country} />
            })}
        </div>
        <Sample c={4} />
      </div>
    )
  }
}

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  font: 'inherit',
  border: 'none',
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
}

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: '#000'
}

styles.panel = {
  padding: 10
}

ReactDOM.render(<Tabs data={countries} />, document.getElementById('root'))
