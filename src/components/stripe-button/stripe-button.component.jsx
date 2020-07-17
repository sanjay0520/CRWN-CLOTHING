import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51H4ZZBI3x02eGbRqlGBMgXDwnVwLebqJ7Zd9hnKs3XAdDTcTW4grzEM8zvdKKG8xjsLNSUxMUx0xQBeIIgNcNyjt00YjefyskH";

  const isToken = (token) => {
    console.log(token);
    alert("Payment ");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      shippingAddress
      billingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now - Panel"
      token={isToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
