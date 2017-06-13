"use strict";
const _ = require("lodash");
const Joi = require("joi");
const getProductRecommendation = require('./getProductRecommendation');

exports.register = function (server, options, next) {
    server.settings.app.globalRouteConfig = {
        validate: {
            failAction: function (request, reply, source, error) {
                return reply().code(400);
            }
        }
    };

    server.method('getProductRecommendation', getProductRecommendation);

    /**
     * Register Route Handlers
     */
     require('./handlers/getRelatedProducts.js')(server);
     require('./handlers/getRequiredProducts.js')(server);
     require('./handlers/getCustomerAlsoViewedProducts.js')(server);

    /**
     * Register Routes
     */

    /**
     * Route for recommendation related products
     */
    server.route({
        method: 'GET',
        path:'/recommendation/product/{productId}/related',
        config: server.settings.app.globalRouteConfig,
        handler: { GetRelatedProductsHandler: {} }
    });

    /**
     * Route for recommendation required products
     */
    server.route({
        method: 'GET',
        path:'/recommendation/product/{productId}/required',
        config: server.settings.app.globalRouteConfig,
        handler: { GetRequiredProductsHandler: {} }
    });

    /**
     * Route for recommendation customeralsoviewed products
     */
    server.route({
        method: 'GET',
        path:'/recommendation/product/{productId}/customeralsoviewed',
        config: server.settings.app.globalRouteConfig,
        handler: { GetCustomerAlsoViewedProductsHandler: {} }
    });

  next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};
