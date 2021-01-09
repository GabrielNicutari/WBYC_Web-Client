import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; //USD to cents
    const publishableKey = "pk_test_51I7WgoBdM5TBupYNVHt3fafbIHPGRWWdecSy9UnhituyEwXSFpzVD71TQp1SECkzX1fzh1oOj7WcQJ1ROYdtdPGK00ZeMN9f3l";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='We Bring | You Cook'
            billingAddress
            shippingAddress
            currency="DKK"
            image='https://i.pinimg.com/originals/ff/c3/d3/ffc3d3f7e25c28ea2d3fe42231736f00.png'
            description={`Your total is ${price} DKK`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;