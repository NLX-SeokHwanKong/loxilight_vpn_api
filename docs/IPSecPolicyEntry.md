# LoxilightVpnApi.IPSecPolicyEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the IKE policy. | 
**name** | **String** | Human-readable name of the resource. Default is an empty string. | 
**description** | **String** | A human-readable description for the resource. Default is an empty string. | [optional] 
**authAlgorithm** | **String** | The authentication hash algorithm. Valid values are sha1, sha256, sha384, sha512. The default is sha1. | [optional] 
**encapsulationMode** | **String** | The encapsulation mode. A valid value is tunnel or transport. Default is tunnel. | [optional] 
**encryptionAlgorithm** | **String** | The encryption algorithm. A valid value is 3des, aes-128, aes-192, aes-256, and so on. Default is aes-128. | [optional] 
**pfs** | **String** | Perfect forward secrecy (PFS). A valid value is Group2, Group5, Group14, and so on. Default is Group5. | [optional] 
**value** | **Number** | The lifetime value, as a positive integer. The lifetime consists of a unit and integer value. You can omit either the unit or value portion of the lifetime. Default unit is seconds and default value is 3600. | [optional] 
**transformProtocol** | **String** | The transform protocol. A valid value is ESP, AH, or AH-ESP. Default is ESP. | [optional] 
**units** | **String** | The units for the lifetime of the security association. The lifetime consists of a unit and integer value. You can omit either the unit or value portion of the lifetime. Default unit is seconds and default value is 3600. | [optional] 
**lifetime** | **Object** | The lifetime of the security association. The lifetime consists of a unit and integer value. You can omit either the unit or value portion of the lifetime. Default unit is seconds and default value is 3600. | [optional] 


