import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LlXN6SCzUEuXTlBTf3j7FzRF2BocTxVf8xiayuuACVl32EWA1lnfVuGxeNSef08T6EA8ms8ArRKIUZPjRIxyxKZ001FKuywhV";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      lable="Pay Now"
      name="Shopify Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;