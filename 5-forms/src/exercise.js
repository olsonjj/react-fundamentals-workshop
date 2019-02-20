////////////////////////////////////////////////////////////////////////////////
// Exercise
//
// - When the checkbox is checked:
//   - Fill in the shipping fields with the values from billing
//   - Disable the shipping fields so they are not directly editable
//   - Keep the shipping fields up to date as billing fields change
//   - Hint: you can get the checkbox value from `event.target.checked`
// - When the form submits, console.log the values
//
// Got extra time?
//
// - If there are more than two characters in the "state" field, let the user
//   know they should use the two-character abbreviation
// - If the user types something into shipping, then checks the checkbox, then
//   unchecks the checkbox, ensure the field has the information from
//   before clicking the checkbox the first time
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import serializeForm from 'form-serialize'

function CheckoutForm() {
  const [billing, setBilling] = useState({
    billingName: '',
    billingState: ''
  })

  const [shipping, setShipping] = useState({
    name: '',
    state: ''
  })

  const [checked, setChecked] = useState(false)

  const submitForm = e => {
    // console.log(`Submit: Billing Name: ${billing.billingName}  State:${billing.billingState}`)
    // if (!checked) {
    //   console.log(`Shipping Name ${shipping.name} State: ${shipping.state}`)
    // }
    const values = serializeForm(e.target, { hash: true })
    console.log('values', values)
    e.preventDefault()
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Billing Address</legend>
          <p>
            <label>
              Billing Name:{' '}
              <input
                type="text"
                name="billingName"
                onChange={e => {
                  setBilling({ ...billing, billingName: e.target.value })
                }}
              />
            </label>
          </p>
          <p>
            <label>
              Billing State:{' '}
              <input
                type="text"
                size="2"
                name="billingState"
                onChange={e => {
                  setBilling({ ...billing, billingState: e.target.value })
                }}
              />
            </label>
          </p>
        </fieldset>

        <br />

        <fieldset>
          <label>
            <input
              type="checkbox"
              onClick={e => {
                setChecked(e.target.checked)
              }}
            />{' '}
            Same as billing
          </label>
          <legend>Shipping Address</legend>
          <p>
            <label>
              Shipping Name:{' '}
              <input
                name="shippingName"
                disabled={checked}
                type="text"
                value={checked ? billing.billingName : shipping.name}
                onChange={e => {
                  setShipping({ ...shipping, name: e.target.value })
                }}
              />
            </label>
          </p>
          <p>
            <label>
              Shipping State:{' '}
              <input
                name="shippingState"
                type="text"
                size="2"
                disabled={checked}
                value={checked ? billing.billingState : shipping.state}
                onChange={e => {
                  setShipping({ ...shipping, state: e.target.value })
                }}
              />
            </label>
          </p>
        </fieldset>

        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  )
}

ReactDOM.render(<CheckoutForm />, document.getElementById('root'))
