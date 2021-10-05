# LoxilightVpnApi.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/NLX-SeokHwanKong/LOXI-VPN-UI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configVpnIkepoliciesGet**](DefaultApi.md#configVpnIkepoliciesGet) | **GET** /config/vpn/ikepolicies | Lists IKE policies.
[**configVpnIkepoliciesIkepolicyIdDelete**](DefaultApi.md#configVpnIkepoliciesIkepolicyIdDelete) | **DELETE** /config/vpn/ikepolicies/{ikepolicy_id} | Removes an IKE policy
[**configVpnIkepoliciesIkepolicyIdGet**](DefaultApi.md#configVpnIkepoliciesIkepolicyIdGet) | **GET** /config/vpn/ikepolicies/{ikepolicy_id} | Shows details for an IKE policy.
[**configVpnIkepoliciesIkepolicyIdPut**](DefaultApi.md#configVpnIkepoliciesIkepolicyIdPut) | **PUT** /config/vpn/ikepolicies/{ikepolicy_id} | Updates policy settings in an IKE policy.
[**configVpnIkepoliciesPost**](DefaultApi.md#configVpnIkepoliciesPost) | **POST** /config/vpn/ikepolicies | Create IKE policy
[**configVpnIpsecSiteConnectionsConnectionIdDelete**](DefaultApi.md#configVpnIpsecSiteConnectionsConnectionIdDelete) | **DELETE** /config/vpn/ipsec-site-connections/{connection_id} | Removes an IPSec policy
[**configVpnIpsecSiteConnectionsConnectionIdGet**](DefaultApi.md#configVpnIpsecSiteConnectionsConnectionIdGet) | **GET** /config/vpn/ipsec-site-connections/{connection_id} | Shows details for an IPSec policy.
[**configVpnIpsecSiteConnectionsConnectionIdPut**](DefaultApi.md#configVpnIpsecSiteConnectionsConnectionIdPut) | **PUT** /config/vpn/ipsec-site-connections/{connection_id} | Updates policy settings in an IPSec policy.
[**configVpnIpsecSiteConnectionsGet**](DefaultApi.md#configVpnIpsecSiteConnectionsGet) | **GET** /config/vpn/ipsec-site-connections | Lists IPSecSiteConnection policies.
[**configVpnIpsecSiteConnectionsPost**](DefaultApi.md#configVpnIpsecSiteConnectionsPost) | **POST** /config/vpn/ipsec-site-connections | Create IPSecSiteConnection policy
[**configVpnIpsecpoliciesGet**](DefaultApi.md#configVpnIpsecpoliciesGet) | **GET** /config/vpn/ipsecpolicies | Lists IPSec policies.
[**configVpnIpsecpoliciesIpsecpolicyIdDelete**](DefaultApi.md#configVpnIpsecpoliciesIpsecpolicyIdDelete) | **DELETE** /config/vpn/ipsecpolicies/{ipsecpolicy_id} | Removes an IPSec policy
[**configVpnIpsecpoliciesIpsecpolicyIdGet**](DefaultApi.md#configVpnIpsecpoliciesIpsecpolicyIdGet) | **GET** /config/vpn/ipsecpolicies/{ipsecpolicy_id} | Shows details for an IPSec policy.
[**configVpnIpsecpoliciesIpsecpolicyIdPut**](DefaultApi.md#configVpnIpsecpoliciesIpsecpolicyIdPut) | **PUT** /config/vpn/ipsecpolicies/{ipsecpolicy_id} | Updates policy settings in an IPSec policy.
[**configVpnIpsecpoliciesPost**](DefaultApi.md#configVpnIpsecpoliciesPost) | **POST** /config/vpn/ipsecpolicies | Create IPSec policy
[**configVpnVpnservicesGet**](DefaultApi.md#configVpnVpnservicesGet) | **GET** /config/vpn/vpnservices | Lists VPN Service.
[**configVpnVpnservicesPost**](DefaultApi.md#configVpnVpnservicesPost) | **POST** /config/vpn/vpnservices | Create VPN Service
[**configVpnVpnservicesServiceIdDelete**](DefaultApi.md#configVpnVpnservicesServiceIdDelete) | **DELETE** /config/vpn/vpnservices/{service_id} | Removes an VPN Service
[**configVpnVpnservicesServiceIdGet**](DefaultApi.md#configVpnVpnservicesServiceIdGet) | **GET** /config/vpn/vpnservices/{service_id} | Shows details for an VPN Service.
[**configVpnVpnservicesServiceIdPut**](DefaultApi.md#configVpnVpnservicesServiceIdPut) | **PUT** /config/vpn/vpnservices/{service_id} | Updates policy settings in an VPN Service.


<a name="configVpnIkepoliciesGet"></a>
# **configVpnIkepoliciesGet**
> Object configVpnIkepoliciesGet()

Lists IKE policies.

Lists IKE policies.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configVpnIkepoliciesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIkepoliciesIkepolicyIdDelete"></a>
# **configVpnIkepoliciesIkepolicyIdDelete**
> configVpnIkepoliciesIkepolicyIdDelete(ikepolicyId)

Removes an IKE policy

Removes an IKE policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var ikepolicyId = "ikepolicyId_example"; // String | ikepolicy_id as a string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIkepoliciesIkepolicyIdDelete(ikepolicyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ikepolicyId** | **String**| ikepolicy_id as a string | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIkepoliciesIkepolicyIdGet"></a>
# **configVpnIkepoliciesIkepolicyIdGet**
> Object configVpnIkepoliciesIkepolicyIdGet(ikepolicyId)

Shows details for an IKE policy.

Shows details for an IKE policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var ikepolicyId = "ikepolicyId_example"; // String | The ID of the IKE policy.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configVpnIkepoliciesIkepolicyIdGet(ikepolicyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ikepolicyId** | **String**| The ID of the IKE policy. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIkepoliciesIkepolicyIdPut"></a>
# **configVpnIkepoliciesIkepolicyIdPut**
> configVpnIkepoliciesIkepolicyIdPut(ikepolicyId, attr)

Updates policy settings in an IKE policy.

Updates policy settings in an IKE policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var ikepolicyId = "ikepolicyId_example"; // String | IKE Policy Id

var attr = new LoxilightVpnApi.IKEPolicyEntry(); // IKEPolicyEntry | attributes for IKE Policy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIkepoliciesIkepolicyIdPut(ikepolicyId, attr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ikepolicyId** | **String**| IKE Policy Id | 
 **attr** | [**IKEPolicyEntry**](IKEPolicyEntry.md)| attributes for IKE Policy | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIkepoliciesPost"></a>
# **configVpnIkepoliciesPost**
> configVpnIkepoliciesPost(attr)

Create IKE policy

Create IKE policy

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var attr = new LoxilightVpnApi.IKEPolicyEntry(); // IKEPolicyEntry | attributes for IKE Policy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIkepoliciesPost(attr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attr** | [**IKEPolicyEntry**](IKEPolicyEntry.md)| attributes for IKE Policy | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecSiteConnectionsConnectionIdDelete"></a>
# **configVpnIpsecSiteConnectionsConnectionIdDelete**
> configVpnIpsecSiteConnectionsConnectionIdDelete(connectionId)

Removes an IPSec policy

Removes an IPSec policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var connectionId = "connectionId_example"; // String | connection_id as a string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIpsecSiteConnectionsConnectionIdDelete(connectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | **String**| connection_id as a string | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecSiteConnectionsConnectionIdGet"></a>
# **configVpnIpsecSiteConnectionsConnectionIdGet**
> Object configVpnIpsecSiteConnectionsConnectionIdGet(connectionId)

Shows details for an IPSec policy.

Shows details for an IPSec policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var connectionId = "connectionId_example"; // String | The ID of the IPSec policy.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configVpnIpsecSiteConnectionsConnectionIdGet(connectionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | **String**| The ID of the IPSec policy. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecSiteConnectionsConnectionIdPut"></a>
# **configVpnIpsecSiteConnectionsConnectionIdPut**
> configVpnIpsecSiteConnectionsConnectionIdPut(connectionId, attr)

Updates policy settings in an IPSec policy.

Updates policy settings in an IPSec policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var connectionId = "connectionId_example"; // String | IPSec Policy Id

var attr = new LoxilightVpnApi.IPSecPolicyEntry(); // IPSecPolicyEntry | attributes for IPSec Policy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIpsecSiteConnectionsConnectionIdPut(connectionId, attr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | **String**| IPSec Policy Id | 
 **attr** | [**IPSecPolicyEntry**](IPSecPolicyEntry.md)| attributes for IPSec Policy | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecSiteConnectionsGet"></a>
# **configVpnIpsecSiteConnectionsGet**
> Object configVpnIpsecSiteConnectionsGet()

Lists IPSecSiteConnection policies.

Lists IPSecSiteConnection policies.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configVpnIpsecSiteConnectionsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecSiteConnectionsPost"></a>
# **configVpnIpsecSiteConnectionsPost**
> configVpnIpsecSiteConnectionsPost(attr)

Create IPSecSiteConnection policy

Create IPSecSiteConnection policy

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var attr = new LoxilightVpnApi.IPSecSiteConnectionEntry(); // IPSecSiteConnectionEntry | attributes for IPSecSiteConnection Policy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIpsecSiteConnectionsPost(attr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attr** | [**IPSecSiteConnectionEntry**](IPSecSiteConnectionEntry.md)| attributes for IPSecSiteConnection Policy | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecpoliciesGet"></a>
# **configVpnIpsecpoliciesGet**
> Object configVpnIpsecpoliciesGet()

Lists IPSec policies.

Lists IPSec policies.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configVpnIpsecpoliciesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecpoliciesIpsecpolicyIdDelete"></a>
# **configVpnIpsecpoliciesIpsecpolicyIdDelete**
> configVpnIpsecpoliciesIpsecpolicyIdDelete(ipsecpolicyId)

Removes an IPSec policy

Removes an IPSec policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var ipsecpolicyId = "ipsecpolicyId_example"; // String | ipsecpolicy_id as a string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIpsecpoliciesIpsecpolicyIdDelete(ipsecpolicyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipsecpolicyId** | **String**| ipsecpolicy_id as a string | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecpoliciesIpsecpolicyIdGet"></a>
# **configVpnIpsecpoliciesIpsecpolicyIdGet**
> Object configVpnIpsecpoliciesIpsecpolicyIdGet(ipsecpolicyId)

Shows details for an IPSec policy.

Shows details for an IPSec policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var ipsecpolicyId = "ipsecpolicyId_example"; // String | The ID of the IPSec policy.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configVpnIpsecpoliciesIpsecpolicyIdGet(ipsecpolicyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipsecpolicyId** | **String**| The ID of the IPSec policy. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecpoliciesIpsecpolicyIdPut"></a>
# **configVpnIpsecpoliciesIpsecpolicyIdPut**
> configVpnIpsecpoliciesIpsecpolicyIdPut(ipsecpolicyId, attr)

Updates policy settings in an IPSec policy.

Updates policy settings in an IPSec policy.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var ipsecpolicyId = "ipsecpolicyId_example"; // String | IPSec Policy Id

var attr = new LoxilightVpnApi.IPSecPolicyEntry(); // IPSecPolicyEntry | attributes for IPSec Policy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIpsecpoliciesIpsecpolicyIdPut(ipsecpolicyId, attr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipsecpolicyId** | **String**| IPSec Policy Id | 
 **attr** | [**IPSecPolicyEntry**](IPSecPolicyEntry.md)| attributes for IPSec Policy | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnIpsecpoliciesPost"></a>
# **configVpnIpsecpoliciesPost**
> configVpnIpsecpoliciesPost(attr)

Create IPSec policy

Create IPSec policy

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var attr = new LoxilightVpnApi.IPSecPolicyEntry(); // IPSecPolicyEntry | attributes for IPSec Policy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnIpsecpoliciesPost(attr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attr** | [**IPSecPolicyEntry**](IPSecPolicyEntry.md)| attributes for IPSec Policy | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnVpnservicesGet"></a>
# **configVpnVpnservicesGet**
> Object configVpnVpnservicesGet()

Lists VPN Service.

Lists VPN Service.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configVpnVpnservicesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnVpnservicesPost"></a>
# **configVpnVpnservicesPost**
> configVpnVpnservicesPost(attr)

Create VPN Service

Create VPN Service

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var attr = new LoxilightVpnApi.VPNServiceEntry(); // VPNServiceEntry | attributes for VPN Service


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnVpnservicesPost(attr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attr** | [**VPNServiceEntry**](VPNServiceEntry.md)| attributes for VPN Service | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnVpnservicesServiceIdDelete"></a>
# **configVpnVpnservicesServiceIdDelete**
> configVpnVpnservicesServiceIdDelete(serviceId)

Removes an VPN Service

Removes an VPN Service.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var serviceId = "serviceId_example"; // String | service_id as a string


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnVpnservicesServiceIdDelete(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**| service_id as a string | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnVpnservicesServiceIdGet"></a>
# **configVpnVpnservicesServiceIdGet**
> Object configVpnVpnservicesServiceIdGet(serviceId)

Shows details for an VPN Service.

Shows details for an VPN Service.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var serviceId = "serviceId_example"; // String | The ID of the VPN Service.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configVpnVpnservicesServiceIdGet(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**| The ID of the VPN Service. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configVpnVpnservicesServiceIdPut"></a>
# **configVpnVpnservicesServiceIdPut**
> configVpnVpnservicesServiceIdPut(serviceId, attr)

Updates policy settings in an VPN Service.

Updates policy settings in an VPN Service.

### Example
```javascript
var LoxilightVpnApi = require('loxilight_vpn_api');

var apiInstance = new LoxilightVpnApi.DefaultApi();

var serviceId = "serviceId_example"; // String | VPN Service Id

var attr = new LoxilightVpnApi.VPNServiceEntry(); // VPNServiceEntry | attributes for VPN Service


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configVpnVpnservicesServiceIdPut(serviceId, attr, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**| VPN Service Id | 
 **attr** | [**VPNServiceEntry**](VPNServiceEntry.md)| attributes for VPN Service | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

