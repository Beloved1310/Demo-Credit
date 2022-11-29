const {KnexService} = require('../services/query')
const fundWalletValidate = require("../validation/fundWalletValidate");

module.exports = async (req, res) => {
    
  const { value, error } = fundWalletValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  await KnexService.incrementWallet("email", req.user.email, "wallet", value.amount)
  return res.send({
    message: `Your account is successfully founded with ${value.amount} naira`,
    // data: `Total amount : ${}`,
  });
};
