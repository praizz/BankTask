const config = {
    app:{ 
        name: "BankTask",
        port: 4000
    },
    database:{
        host:"mongodb://localhost",
        port: 27017,
        index: "banktask",
        url: "mongodb://localhost:27017/banktask"
    }
};
module.exports = config;