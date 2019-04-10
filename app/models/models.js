
const mongoose = require('mongoose');
const config = require('./../config/config');
const mongoosastic = require('mongoosastic');
const elasticsearch = require('elasticsearch');

mongoose.Promise = global.Promise;
mongoose.connect(config.database.url, {
    useNewUrlParser: true
});

const TransactionSchema = new mongoose.Schema({
    DATE: {
        type: Date,
        //required: true,
        es_indexed: true
    },
    DESCRIPTION: {
        type: String,
        //required: true,
        es_indexed: true
    },
    DEBIT: {
        type: Number,
        //required: true,
        es_indexed: true
    },
    CREDIT: {
        type: Number,
        //required: true,
        es_indexed: true
    },
    'VALUE DATE': {
        type: Date,
        //required: true
    },
    BALANCE:  {
        type: Number,
        //required: true,
        es_indexed: true
    },
})
TransactionSchema.plugin(mongoosastic); 
const Transaction = mongoose.model("Transaction", TransactionSchema );



module.exports = Transaction;
