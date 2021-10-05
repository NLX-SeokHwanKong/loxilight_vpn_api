# LoxilightVpnApi.IPSecSiteConnectionEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the IPSec Site Connection. | 
**name** | **String** | Human-readable name of the resource. Default is an empty string. | 
**description** | **String** | A human-readable description for the resource. Default is an empty string. | [optional] 
**authMode** | **String** | The authentication mode. A valid value is psk, which is the default. | [optional] 
**ikepolicyId** | **String** | The ID of the IKE policy. | [optional] 
**vpnserviceId** | **String** | The ID of the VPN service. | [optional] 
**ipsecpolicyId** | **String** | The ID of the IPsec policy. | [optional] 
**peerAddress** | **String** | The peer gateway public IPv4 or IPv6 address or FQDN. | [optional] 
**psk** | **String** | The pre-shared key. A valid value is any string. | [optional] 
**adminStateUp** | **Boolean** | The administrative state of the resource, which is up (true) or down (false). | [optional] 
**status** | **String** | Indicates whether the IPsec connection is currently operational. Values are ACTIVE, DOWN, BUILD, ERROR, PENDING_CREATE, PENDING_UPDATE, or PENDING_DELETE. | [optional] 
**interval** | **Number** | The dead peer detection (DPD) interval, in seconds. A valid value is a positive integer. Default is 30. | [optional] 
**mtu** | **Number** | The maximum transmission unit (MTU) value to address fragmentation. Minimum value is 68 for IPv4, and 1280 for IPv6. | [optional] 
**timeout** | **Number** | The dead peer detection (DPD) timeout in seconds. A valid value is a positive integer that is greater than the DPD interval value. Default is 120. | [optional] 
**action** | **String** | The dead peer detection (DPD) action. A valid value is clear, hold, restart, disabled, or restart-by-peer. Default value is hold. | [optional] 
**routeMode** | **String** | The route mode. A valid value is static, which is the default. | [optional] 


