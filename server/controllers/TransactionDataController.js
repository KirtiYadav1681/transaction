const SalesData = require('../models/Data')

module.exports.getAllData = async (req, res) =>{
    try {
        const transactions = await SalesData.find();
        await res.json( transactions );
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        res.status(500).send('Internal Server Error');
    }
}