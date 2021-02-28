[@amplitude/react-native]() / [Exports](../modules.md) / Amplitude

# Class: Amplitude

## Table of contents

### Properties

- [instanceName](amplitude.md#instancename)

### Methods

- [clearUserProperties](amplitude.md#clearuserproperties)
- [disableCoppaControl](amplitude.md#disablecoppacontrol)
- [enableCoppaControl](amplitude.md#enablecoppacontrol)
- [groupIdentify](amplitude.md#groupidentify)
- [identify](amplitude.md#identify)
- [init](amplitude.md#init)
- [logEvent](amplitude.md#logevent)
- [logRevenueV2](amplitude.md#logrevenuev2)
- [regenerateDeviceId](amplitude.md#regeneratedeviceid)
- [setGroup](amplitude.md#setgroup)
- [setOptOut](amplitude.md#setoptout)
- [setServerUrl](amplitude.md#setserverurl)
- [setUseDynamicConfig](amplitude.md#setusedynamicconfig)
- [setUserId](amplitude.md#setuserid)
- [setUserProperties](amplitude.md#setuserproperties)
- [trackingSessionEvents](amplitude.md#trackingsessionevents)
- [uploadEvents](amplitude.md#uploadevents)
- [getInstance](amplitude.md#getinstance)

## Properties

### instanceName

• **instanceName**: *string*

## Methods

### clearUserProperties

▸ **clearUserProperties**(): *Promise*<boolean\>

Clears all properties that are tracked on the user level.

Note: This operation is irreversible!!

**Returns:** *Promise*<boolean\>

___

### disableCoppaControl

▸ **disableCoppaControl**(): *Promise*<boolean\>

Disable COPPA (Children's Online Privacy Protection Act) restrictions on
IDFA, IDFV, city, IP address and location tracking.

**Returns:** *Promise*<boolean\>

___

### enableCoppaControl

▸ **enableCoppaControl**(): *Promise*<boolean\>

Enable COPPA (Children's Online Privacy Protection Act) restrictions on
IDFA, IDFV, city, IP address and location tracking.

This can be used by any customer that does not want to collect IDFA, IDFV,
city, IP address and location tracking.

**Returns:** *Promise*<boolean\>

___

### groupIdentify

▸ **groupIdentify**(`groupType`: *string*, `groupName`: *string* \| *string*[], `identifyInstance`: [*Identify*](identify.md)): *Promise*<boolean\>

Set or update properties of particular groups

#### Parameters:

Name | Type |
:------ | :------ |
`groupType` | *string* |
`groupName` | *string* \| *string*[] |
`identifyInstance` | [*Identify*](identify.md) |

**Returns:** *Promise*<boolean\>

___

### identify

▸ **identify**(`identifyInstance`: [*Identify*](identify.md)): *Promise*<boolean\>

Send an identify call containing user property operations to Amplitude servers.

#### Parameters:

Name | Type |
:------ | :------ |
`identifyInstance` | [*Identify*](identify.md) |

**Returns:** *Promise*<boolean\>

___

### init

▸ **init**(`apiKey`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`apiKey` | *string* |

**Returns:** *Promise*<boolean\>

___

### logEvent

▸ **logEvent**(`eventType`: *string*): *Promise*<boolean\>

Tracks an event. Events are saved locally.
Uploads are batched to occur every 30 events or every 30 seconds
(whichever comes first), as well as on app close.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`eventType` | *string* | The name of the event you wish to track.    |

**Returns:** *Promise*<boolean\>

___

### logRevenueV2

▸ **logRevenueV2**(`userProperties`: { `eventProperties?`: *undefined* \| { [key: string]: *any*;  } ; `price`: *number* ; `productId?`: *undefined* \| *string* ; `quantity?`: *undefined* \| *number* ; `receipt?`: *undefined* \| *string* ; `receiptSignature?`: *undefined* \| *string* ; `revenueType?`: *undefined* \| *string*  }): *Promise*<boolean\>

Log revenue data.

Note: price is a required field to log revenue events.
If quantity is not specified then defaults to 1.

#### Parameters:

Name | Type |
:------ | :------ |
`userProperties` | *object* |
`userProperties.eventProperties?` | *undefined* \| { [key: string]: *any*;  } |
`userProperties.price` | *number* |
`userProperties.productId?` | *undefined* \| *string* |
`userProperties.quantity?` | *undefined* \| *number* |
`userProperties.receipt?` | *undefined* \| *string* |
`userProperties.receiptSignature?` | *undefined* \| *string* |
`userProperties.revenueType?` | *undefined* \| *string* |

**Returns:** *Promise*<boolean\>

___

### regenerateDeviceId

▸ **regenerateDeviceId**(): *Promise*<boolean\>

Regenerate the DeviceId

**Returns:** *Promise*<boolean\>

___

### setGroup

▸ **setGroup**(`groupType`: *string*, `groupName`: *string* \| *string*[]): *Promise*<boolean\>

Adds a user to a group or groups. You need to specify a groupType and groupName(s).

#### Parameters:

Name | Type |
:------ | :------ |
`groupType` | *string* |
`groupName` | *string* \| *string*[] |

**Returns:** *Promise*<boolean\>

___

### setOptOut

▸ **setOptOut**(`optOut`: *boolean*): *Promise*<boolean\>

Enables tracking opt out.

If the user wants to opt out of all tracking, use this method to enable
opt out for them. Once opt out is enabled, no events will be saved locally
or sent to the server.

Calling this method again with enabled set to false will turn tracking back on for the user.

#### Parameters:

Name | Type |
:------ | :------ |
`optOut` | *boolean* |

**Returns:** *Promise*<boolean\>

___

### setServerUrl

▸ **setServerUrl**(`serverUrl`: *string*): *Promise*<boolean\>

Customize the destination for server url.

#### Parameters:

Name | Type |
:------ | :------ |
`serverUrl` | *string* |

**Returns:** *Promise*<boolean\>

___

### setUseDynamicConfig

▸ **setUseDynamicConfig**(`useDynamicConfig`: *boolean*): *Promise*<boolean\>

Dynamically adjust server URL

#### Parameters:

Name | Type |
:------ | :------ |
`useDynamicConfig` | *boolean* |

**Returns:** *Promise*<boolean\>

___

### setUserId

▸ **setUserId**(`userId`: *string*): *Promise*<boolean\>

If your app has its own login system that you want to track users with,
you can set the userId.

#### Parameters:

Name | Type |
:------ | :------ |
`userId` | *string* |

**Returns:** *Promise*<boolean\>

___

### setUserProperties

▸ **setUserProperties**(`userProperties`: *Record*<string, unknown\>): *Promise*<boolean\>

Adds properties that are tracked on the user level.
Note: Property keys must be [String] objects and values must be serializable.

#### Parameters:

Name | Type |
:------ | :------ |
`userProperties` | *Record*<string, unknown\> |

**Returns:** *Promise*<boolean\>

___

### trackingSessionEvents

▸ **trackingSessionEvents**(`trackSessionEvents`: *boolean*): *Promise*<boolean\>

Whether to automatically log start and end session events corresponding to
the start and end of a user's session.

#### Parameters:

Name | Type |
:------ | :------ |
`trackSessionEvents` | *boolean* |

**Returns:** *Promise*<boolean\>

___

### uploadEvents

▸ **uploadEvents**(): *Promise*<boolean\>

Upload all unsent events.

**Returns:** *Promise*<boolean\>

___

### getInstance

▸ `Static`**getInstance**(`instanceName?`: *string*): [*Amplitude*](amplitude.md)

#### Parameters:

Name | Type |
:------ | :------ |
`instanceName` | *string* |

**Returns:** [*Amplitude*](amplitude.md)
