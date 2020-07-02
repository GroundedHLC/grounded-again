import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Segment, Divider } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

const CartSummary = ({ products, handleCheckout, success }) => {
  const [cartAmout, setCartAmaount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmaount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  return (
    <React.Fragment>
      <Divider />
      <Segment clearing size='large'>
        <strong>Sub total:</strong> ${cartAmout}
        <StripeCheckout
          name='GroundedHLC'
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ''}
          currency='USD'
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          stripeKey='pk_test_kvLYA12KHorL24g3aTjLu4oc00SFcodPaA'
          token={handleCheckout}
          triggerEvent='onClick'
        >
          <Button
            icon='cart'
            color='green'
            floated='right'
            content='Checkout'
            disabled={isCartEmpty || success}
          />
        </StripeCheckout>
      </Segment>
    </React.Fragment>
  );
};

export default CartSummary;
