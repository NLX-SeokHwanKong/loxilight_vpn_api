# LoxilightVpnApi.VPNServiceEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the IKE policy. | 
**name** | **String** | Human-readable name of the resource. Default is an empty string. | 
**description** | **String** | A human-readable description for the resource. Default is an empty string. | [optional] 
**externalV6Ip** | **String** | Read-only external (public) IPv6 address that is used for the VPN service. The VPN plugin sets this address if an IPv6 interface is available. | [optional] 
**externalV4Ip** | **String** | Read-only external (public) IPv4 address that is used for the VPN service. The VPN plugin sets this address if an IPv4 interface is available. | [optional] 
**status** | **String** | Indicates whether IPsec VPN service is currently operational. Values are ACTIVE, DOWN, BUILD, ERROR, PENDING_CREATE, PENDING_UPDATE, or PENDING_DELETE. | [optional] 
**adminStateUp** | **Boolean** | The administrative state of the resource, which is up (true) or down (false). | [optional] 
**routerId** | **String** | The ID of the router. | [optional] 
**subnetId** | **String** | If you specify only a subnet UUID, OpenStack Networking allocates an available IP from that subnet to the port. If you specify both a subnet UUID and an IP address, OpenStack Networking tries to allocate the address to the port. | [optional] 


