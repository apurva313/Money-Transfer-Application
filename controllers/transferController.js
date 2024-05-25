
const accounts = require('../models/accounts');

const transferMoney = (req, res) => {
    const { from, to, amount } = req.body;

    // Check if accounts exist
    if (!accounts[from] || !accounts[to]) {
        return res.status(404).json({ error: "One or both accounts not found" });
    }

    // Check if sufficient balance in the sender's account
    if (accounts[from].balance < amount) {
        return res.status(400).json({ error: "Insufficient balance" });
    }

    // Perform the transfer
    accounts[from].balance -= amount;
    accounts[to].balance += amount;

    res.json({ message: "Transfer successful", accounts });
};

const getBalance = (req, res) => {
    const { accountId } = req.params;
    const account = accounts[accountId];
    if (!account) {
        return res.status(404).json({ error: "Account not found" });
    }
    res.json({ balance: account.balance });
};

module.exports = {
    transferMoney,
    getBalance
};
