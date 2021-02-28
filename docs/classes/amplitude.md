[@amplitude/react-native]() / [Exports](../modules.md) / Amplitude

# Class: Amplitude

## Table of contents

### Properties

- [instanceName](amplitude.md#instancename)

### Methods

- [init](amplitude.md#init)
- [getInstance](amplitude.md#getinstance)
- [logEvent](amplitude.md#logevent)
- [setUserId](amplitude.md#setuserid)
- [setUserProperties](amplitude.md#setuserproperties)
- [clearUserProperties](amplitude.md#clearuserproperties)
- [disableCoppaControl](amplitude.md#disablecoppacontrol)
- [enableCoppaControl](amplitude.md#enablecoppacontrol)
- [groupIdentify](amplitude.md#groupidentify)
- [identify](amplitude.md#identify)
- [logRevenueV2](amplitude.md#logrevenuev2)
- [regenerateDeviceId](amplitude.md#regeneratedeviceid)
- [setGroup](amplitude.md#setgroup)
- [setOptOut](amplitude.md#setoptout)
- [setServerUrl](amplitude.md#setserverurl)
- [setUseDynamicConfig](amplitude.md#setusedynamicconfig)
- [trackingSessionEvents](amplitude.md#trackingsessionevents)
- [uploadEvents](amplitude.md#uploadevents)

## Properties

### instanceName

• **instanceName**: _string_

## Methods

### clearUserProperties

▸ **clearUserProperties**(): _Promise_<boolean\>

Clears all properties that are tracked on the user level.

Note: This operation is irreversible!!

**Returns:** _Promise_<boolean\>

---

### disableCoppaControl

▸ **disableCoppaControl**(): _Promise_<boolean\>

Disable COPPA (Children's Online Privacy Protection Act) restrictions on IDFA,
IDFV, city, IP address and location tracking.

**Returns:** _Promise_<boolean\>

---

### enableCoppaControl

▸ **enableCoppaControl**(): _Promise_<boolean\>

Enable COPPA (Children's Online Privacy Protection Act) restrictions on IDFA,
IDFV, city, IP address and location tracking.

This can be used by any customer that does not want to collect IDFA, IDFV, city,
IP address and location tracking.

**Returns:** _Promise_<boolean\>

---

### groupIdentify

▸ **groupIdentify**(`groupType`: _string_, `groupName`: _string_ \| _string_[],
`identifyInstance`: [_Identify_](identify.md)): _Promise_<boolean\>

Set or update properties of particular groups

#### Parameters:

| Name               | Type                      |
| :----------------- | :------------------------ |
| `groupType`        | _string_                  |
| `groupName`        | _string_ \| _string_[]    |
| `identifyInstance` | [_Identify_](identify.md) |

**Returns:** _Promise_<boolean\>

---

### identify

▸ **identify**(`identifyInstance`: [_Identify_](identify.md)):
_Promise_<boolean\>

Send an identify call containing user property operations to Amplitude servers.

#### Parameters:

| Name               | Type                      |
| :----------------- | :------------------------ |
| `identifyInstance` | [_Identify_](identify.md) |

**Returns:** _Promise_<boolean\>

---

### init

▸ **init**(`apiKey`: _string_): _Promise_<boolean\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `apiKey` | _string_ |

**Returns:** _Promise_<boolean\>

---

### logEvent

▸ **logEvent**(`eventType`: _string_): _Promise_<boolean\>

Tracks an event. Events are saved locally. Uploads are batched to occur every 30
events or every 30 seconds (whichever comes first), as well as on app close.

#### Parameters:

| Name        | Type     | Description                              |
| :---------- | :------- | :--------------------------------------- |
| `eventType` | _string_ | The name of the event you wish to track. |

**Returns:** _Promise_<boolean\>

---

### logRevenueV2

▸ **logRevenueV2**(`userProperties`: { `eventProperties?`: _undefined_ \| {
[key: string]: _any_; } ; `price`: _number_ ; `productId?`: _undefined_ \|
_string_ ; `quantity?`: _undefined_ \| _number_ ; `receipt?`: _undefined_ \|
_string_ ; `receiptSignature?`: _undefined_ \| _string_ ; `revenueType?`:
_undefined_ \| _string_ }): _Promise_<boolean\>

Log revenue data.

Note: price is a required field to log revenue events. If quantity is not
specified then defaults to 1.

#### Parameters:

| Name                               | Type                                     |
| :--------------------------------- | :--------------------------------------- |
| `userProperties`                   | _object_                                 |
| `userProperties.eventProperties?`  | _undefined_ \| { [key: string]: _any_; } |
| `userProperties.price`             | _number_                                 |
| `userProperties.productId?`        | _undefined_ \| _string_                  |
| `userProperties.quantity?`         | _undefined_ \| _number_                  |
| `userProperties.receipt?`          | _undefined_ \| _string_                  |
| `userProperties.receiptSignature?` | _undefined_ \| _string_                  |
| `userProperties.revenueType?`      | _undefined_ \| _string_                  |

**Returns:** _Promise_<boolean\>

---

### regenerateDeviceId

▸ **regenerateDeviceId**(): _Promise_<boolean\>

Regenerate the DeviceId

**Returns:** _Promise_<boolean\>

---

### setGroup

▸ **setGroup**(`groupType`: _string_, `groupName`: _string_ \| _string_[]):
_Promise_<boolean\>

Adds a user to a group or groups. You need to specify a groupType and
groupName(s).

#### Parameters:

| Name        | Type                   |
| :---------- | :--------------------- |
| `groupType` | _string_               |
| `groupName` | _string_ \| _string_[] |

**Returns:** _Promise_<boolean\>

---

### setOptOut

▸ **setOptOut**(`optOut`: _boolean_): _Promise_<boolean\>

Enables tracking opt out.

If the user wants to opt out of all tracking, use this method to enable opt out
for them. Once opt out is enabled, no events will be saved locally or sent to
the server.

Calling this method again with enabled set to false will turn tracking back on
for the user.

#### Parameters:

| Name     | Type      |
| :------- | :-------- |
| `optOut` | _boolean_ |

**Returns:** _Promise_<boolean\>

---

### setServerUrl

▸ **setServerUrl**(`serverUrl`: _string_): _Promise_<boolean\>

Customize the destination for server url.

#### Parameters:

| Name        | Type     |
| :---------- | :------- |
| `serverUrl` | _string_ |

**Returns:** _Promise_<boolean\>

---

### setUseDynamicConfig

▸ **setUseDynamicConfig**(`useDynamicConfig`: _boolean_): _Promise_<boolean\>

Dynamically adjust server URL

#### Parameters:

| Name               | Type      |
| :----------------- | :-------- |
| `useDynamicConfig` | _boolean_ |

**Returns:** _Promise_<boolean\>

---

### setUserId

▸ **setUserId**(`userId`: _string_): _Promise_<boolean\>

If your app has its own login system that you want to track users with, you can
set the userId.

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `userId` | _string_ |

**Returns:** _Promise_<boolean\>

---

### setUserProperties

▸ **setUserProperties**(`userProperties`: _Record_<string, unknown\>):
_Promise_<boolean\>

Adds properties that are tracked on the user level. Note: Property keys must be
[String] objects and values must be serializable.

#### Parameters:

| Name             | Type                       |
| :--------------- | :------------------------- |
| `userProperties` | _Record_<string, unknown\> |

**Returns:** _Promise_<boolean\>

---

### trackingSessionEvents

▸ **trackingSessionEvents**(`trackSessionEvents`: _boolean_):
_Promise_<boolean\>

Whether to automatically log start and end session events corresponding to the
start and end of a user's session.

#### Parameters:

| Name                 | Type      |
| :------------------- | :-------- |
| `trackSessionEvents` | _boolean_ |

**Returns:** _Promise_<boolean\>

---

### uploadEvents

▸ **uploadEvents**(): _Promise_<boolean\>

Upload all unsent events.

**Returns:** _Promise_<boolean\>

---

### getInstance

▸ `Static`**getInstance**(`instanceName?`: _string_):
[_Amplitude_](amplitude.md)

#### Parameters:

| Name           | Type     |
| :------------- | :------- |
| `instanceName` | _string_ |

**Returns:** [_Amplitude_](amplitude.md)
