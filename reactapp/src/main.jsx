//library
import React from 'react'
import ReactDOM from 'react-dom/client'
import ResponsiveAppBar from './Homepage.jsx';
import Checkout from './Checkout.jsx'; 
import AddressForm from './Address.jsx';
import PaymentForm from './payment.jsx';
import Review from './review.jsx';

import App from './Routes.jsx';
import Profile from './Profile.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <Checkout/> */}
    {/* <Profile/> */}
  </React.StrictMode>
)
