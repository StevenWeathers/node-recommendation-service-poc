"use strict";
const redis = require("redis");

module.exports = function (recType, productId, next) {
    let client = redis.createClient({
        host: "db"
    });

    client.get(`product_${recType}_${productId}`, function (err, value){
        let recommendation = {};
        recommendation[recType] = (value) ? value.split(",") : [];

        if (!err) {
            next(null, recommendation);
        } else {
            console.log(err);
            next(err);
        }
    });
};
