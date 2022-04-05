const stripe = require("stripe")(process.env.STRIPE_API_SECRET);

const stripeController = async (req, res) => {
  const { prchase, total_amount, shipping_fee } = req.body;

  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: "usd",
  });
  console.log(paymentIntent);
  res.send({ clientSecret: paymentIntent.client_secret });
};

module.exports = stripeController;
