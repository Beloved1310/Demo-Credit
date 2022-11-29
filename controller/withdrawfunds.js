const {KnexService} = require('../services/query')
const fundWalletValidate = require("../validation/fundWalletValidate");

module.exports = async (req, res) => {

  const { value, error } = fundWalletValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  
  const { amount} = value
  await KnexService.decrementWallet(req.user.email, amount)
  return res.send({
    message: `Withdrawal of  ${amount} naira successful`,
    // data,
  });
};
