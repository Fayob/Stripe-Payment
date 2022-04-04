const stripe = async (req, res) => {
  console.log(req.body);
  res.send("Stripe Routes");
};

module.exports = stripe;
