import React from 'react'
import './css/Customer.css'

const Customer = ({ customer,
                    customerName,
                    customerEmail, 
                    customerPhoneNumber, 
                    deleteCustomer,
                    customerID,
                    setEditCustomerFormRendered,
                    setEditCustomerFormData,
                    setNewCustomerFormRendered}) => {
  return (
    <div className='customer'>
        <div className='customer-text'>
            <p>{customerName}</p>
            <p>{customerEmail}</p>
            <p>{customerPhoneNumber}</p>
        </div>
        <div className='button-box'>
            <button onClick={() => (setNewCustomerFormRendered(true), setEditCustomerFormData(customer))} className='edit-customer'>Edit</button>
            <button onClick={() => deleteCustomer(customerID)} className='delete-customer'>Delete</button>
        </div>
    </div>
  )
}

export default Customer