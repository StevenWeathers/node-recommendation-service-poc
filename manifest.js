"use strict";
// $lab:coverage:off$
/**
 * recommendation - Application Config
 */

/**
 * Plugins
 */
var manifest = {
  "plugins" : {
    "./recommendation": null
  }
};

/**
 * Server Config
 */
manifest.server = manifest.server || {};
manifest.connections = [
    {
      "port" : process.env.PORT || 3000
    }
];
manifest.server.app = manifest.server.app || {};

/**
 * Server Method Timeouts Config
 */
manifest.server.app.timeout = {};
/**
 * Server Caching Config
 */
manifest.server.app.cache = {};

module.exports = manifest;
// $lab:coverage:on$
