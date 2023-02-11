'use strict';

/**
 * system-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::system-component.system-component');
