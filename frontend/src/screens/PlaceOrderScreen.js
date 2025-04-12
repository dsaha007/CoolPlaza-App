// filepath: d:\PROJECT\mern-ecommerce\frontend\src\screens\PlaceOrderScreen.js
import React, { useState } from 'react';

export default function PlaceOrderScreen() {
  const [promoCode, setPromoCode] = useState('');

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await Axios.post(
        `${process.env.REACT_APP_API_URL}/api/orders`,
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
          promoCode, // Include promo code
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Helmet>
        <title>Place Order</title>
      </Helmet>
      <Row>
        <Col md={8}>
          {/* ...existing code... */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Promo Code</Card.Title>
              <Form.Control
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Button
                type="button"
                onClick={placeOrderHandler}
                disabled={cart.cartItems.length === 0}
              >
                Place Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}