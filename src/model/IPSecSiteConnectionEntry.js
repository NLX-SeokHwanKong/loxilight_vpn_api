/*
 * LOXILIGHT VPN API
 * LOXILIGHT VPN API for CPE Scenarios
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LoxilightVpnApi) {
      root.LoxilightVpnApi = {};
    }
    root.LoxilightVpnApi.IPSecSiteConnectionEntry = factory(root.LoxilightVpnApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IPSecSiteConnectionEntry model module.
   * @module model/IPSecSiteConnectionEntry
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IPSecSiteConnectionEntry</code>.
   * @alias module:model/IPSecSiteConnectionEntry
   * @class
   * @param id {String} The ID of the IPSec Site Connection.
   * @param name {String} Human-readable name of the resource. Default is an empty string.
   */
  var exports = function(id, name) {
    this.id = id;
    this.name = name;
  };

  /**
   * Constructs a <code>IPSecSiteConnectionEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IPSecSiteConnectionEntry} obj Optional instance to populate.
   * @return {module:model/IPSecSiteConnectionEntry} The populated <code>IPSecSiteConnectionEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('auth_mode'))
        obj.authMode = ApiClient.convertToType(data['auth_mode'], 'String');
      if (data.hasOwnProperty('ikepolicy_id'))
        obj.ikepolicyId = ApiClient.convertToType(data['ikepolicy_id'], 'String');
      if (data.hasOwnProperty('vpnservice_id'))
        obj.vpnserviceId = ApiClient.convertToType(data['vpnservice_id'], 'String');
      if (data.hasOwnProperty('ipsecpolicy_id'))
        obj.ipsecpolicyId = ApiClient.convertToType(data['ipsecpolicy_id'], 'String');
      if (data.hasOwnProperty('peer_address'))
        obj.peerAddress = ApiClient.convertToType(data['peer_address'], 'String');
      if (data.hasOwnProperty('psk'))
        obj.psk = ApiClient.convertToType(data['psk'], 'String');
      if (data.hasOwnProperty('admin_state_up'))
        obj.adminStateUp = ApiClient.convertToType(data['admin_state_up'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('interval'))
        obj.interval = ApiClient.convertToType(data['interval'], 'Number');
      if (data.hasOwnProperty('mtu'))
        obj.mtu = ApiClient.convertToType(data['mtu'], 'Number');
      if (data.hasOwnProperty('timeout'))
        obj.timeout = ApiClient.convertToType(data['timeout'], 'Number');
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('route_mode'))
        obj.routeMode = ApiClient.convertToType(data['route_mode'], 'String');
    }
    return obj;
  }

  /**
   * The ID of the IPSec Site Connection.
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Human-readable name of the resource. Default is an empty string.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * A human-readable description for the resource. Default is an empty string.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The authentication mode. A valid value is psk, which is the default.
   * @member {String} authMode
   */
  exports.prototype.authMode = undefined;

  /**
   * The ID of the IKE policy.
   * @member {String} ikepolicyId
   */
  exports.prototype.ikepolicyId = undefined;

  /**
   * The ID of the VPN service.
   * @member {String} vpnserviceId
   */
  exports.prototype.vpnserviceId = undefined;

  /**
   * The ID of the IPsec policy.
   * @member {String} ipsecpolicyId
   */
  exports.prototype.ipsecpolicyId = undefined;

  /**
   * The peer gateway public IPv4 or IPv6 address or FQDN.
   * @member {String} peerAddress
   */
  exports.prototype.peerAddress = undefined;

  /**
   * The pre-shared key. A valid value is any string.
   * @member {String} psk
   */
  exports.prototype.psk = undefined;

  /**
   * The administrative state of the resource, which is up (true) or down (false).
   * @member {Boolean} adminStateUp
   */
  exports.prototype.adminStateUp = undefined;

  /**
   * Indicates whether the IPsec connection is currently operational. Values are ACTIVE, DOWN, BUILD, ERROR, PENDING_CREATE, PENDING_UPDATE, or PENDING_DELETE.
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * The dead peer detection (DPD) interval, in seconds. A valid value is a positive integer. Default is 30.
   * @member {Number} interval
   */
  exports.prototype.interval = undefined;

  /**
   * The maximum transmission unit (MTU) value to address fragmentation. Minimum value is 68 for IPv4, and 1280 for IPv6.
   * @member {Number} mtu
   */
  exports.prototype.mtu = undefined;

  /**
   * The dead peer detection (DPD) timeout in seconds. A valid value is a positive integer that is greater than the DPD interval value. Default is 120.
   * @member {Number} timeout
   */
  exports.prototype.timeout = undefined;

  /**
   * The dead peer detection (DPD) action. A valid value is clear, hold, restart, disabled, or restart-by-peer. Default value is hold.
   * @member {String} action
   */
  exports.prototype.action = undefined;

  /**
   * The route mode. A valid value is static, which is the default.
   * @member {String} routeMode
   */
  exports.prototype.routeMode = undefined;


  return exports;

}));