////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - render DATA.title in an <h1>
// - render a <ul> with each of DATA.items as an <li> and display the name
// - limit the list to only mexican food (hint: use DATA.items.filter(...))
// - sort the items in alphabetical order by name
//   (hint: use sort-by https://github.com/staygrimm/sort-by#example)
//
// Got extra time and know some React already?
// - add a select dropdown to make filtering on `type` dynamic
// - add a button to toggle the sort order
// - Hint: you'll need an `updateThePage` function that calls `render`,
//   and then you'll need to call it in the event handlers of the form controls
////////////////////////////////////////////////////////////////////////////////
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import sortBy from 'sort-by'

let flipOrder = ''
let sortType = 'mexican'

const DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'mushy peas', type: 'english' },
    { id: 5, name: 'fish and chips', type: 'english' },
    { id: 6, name: 'black pudding', type: 'english' }
  ]
}

const changed = e => {
  console.log('select changed')
  sortType = e.target.value;
  updateThePage();
}

const clicked = e => {
  console.log('clicked')
  flipOrder = (flipOrder === '') ? '-' : '';
  updateThePage();
}

const updateThePage = () => {
  const element = (
    // put your code here!
    <div className="container">
      <h2>{DATA.title}</h2>
      <button onClick={clicked}>Flip Sort</button>
      <select onChange={changed}>
        <option value="mexican">Mexican</option>
        <option value="english">English</option>
      </select>
      <ul>
        {DATA.items
          .filter(item => item.type === sortType)
          .sort(sortBy(flipOrder + 'name'))
          .map(item => {
            return <li>{item.name}</li>
          })}
      </ul>
    </div>
  )

  ReactDOM.render(element, document.getElementById('root'))
}

updateThePage();
