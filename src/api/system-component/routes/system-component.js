'use strict';

/**
 * system-component router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::system-component.system-component');
