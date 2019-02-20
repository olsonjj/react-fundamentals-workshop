////////////////////////////////////////////////////////
// 1. Make a `Menu` component that receives a list of
//    items as a prop
// 2. Make a `MenuItem` component and pass it the props
//    it needs to render
// 3. Render two menus at the same time, one for
//    mexican food and one for english food
// 4. Pass in a custom "name" to each Menu
////////////////////////////////////////////////////////
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import sortBy from 'sort-by'

const items = [
  { id: 1, name: 'tacos', type: 'mexican', price: 6 },
  { id: 2, name: 'burrito', type: 'mexican', price: 9 },
  { id: 3, name: 'tostada', type: 'mexican', price: 8 },
  { id: 4, name: 'mushy peas', type: 'english', price: 3 },
  { id: 5, name: 'fish and chips', type: 'english', price: 12 },
  { id: 6, name: 'black pudding', type: 'english', price: 12 }
];

const MenuItem = ({item}) => {
  return (
    <li >
          {item.name} - <small>${item.price}</small>
        </li>
  );
}

const Menu = ({title, items, type}) => {
  return (<div className="container">
    <h3>{title}</h3>
    <ul>
      {items.filter(item=> item.type === type).sort(sortBy('name')).map(item => (
        <MenuItem key={item.id} item={item}></MenuItem>
      ))}
    </ul>
  </div>);
}

ReactDOM.render(
  <div>
    <h1>Menu</h1>
    <Menu items={items} type={'mexican'} title={'Mexican'}></Menu>
    <Menu items={items} type={'english'} title={'English'}></Menu>
  </div>,
  document.getElementById('root')
)
