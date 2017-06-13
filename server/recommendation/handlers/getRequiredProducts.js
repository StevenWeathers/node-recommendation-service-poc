"use strict";

module.exports = function (server) {
    server.handler('GetRequiredProductsHandler', function (route, options) {
        return function (request, reply) {
            let recType = "required";
            let productId = request.params.productId;

            request.server.methods.getProductRecommendation(recType, productId, function(err, response) {
                if (!err) {
                    reply(response);
                } else {
                    console.log(err);
                    reply(err);
                }
            });
        };
    });
};
