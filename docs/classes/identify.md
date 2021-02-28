[@amplitude/react-native](../LIBRARY.md) / [Exports](../modules.md) / Identify

# Class: Identify

## Table of contents

### Constructors

- [constructor](identify.md#constructor)

### Properties

- [payload](identify.md#payload)

### Methods

- [add](identify.md#add)
- [addOp](identify.md#addop)
- [append](identify.md#append)
- [set](identify.md#set)
- [setOnce](identify.md#setonce)
- [unset](identify.md#unset)

## Constructors

### constructor

\+ **new Identify**(): [*Identify*](identify.md)

**Returns:** [*Identify*](identify.md)

## Properties

### payload

• **payload**: *Record*<string, Record<string, unknown\>\>

## Methods

### add

▸ **add**(`key`: *string*, `value`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | *number* |

**Returns:** *void*

___

### addOp

▸ `Protected`**addOp**(`op`: *string*, `key`: *string*, `value`: *unknown*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`op` | *string* |
`key` | *string* |
`value` | *unknown* |

**Returns:** *void*

___

### append

▸ **append**(`key`: *string*, `value`: *unknown*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | *unknown* |

**Returns:** *void*

___

### set

▸ **set**(`key`: *string*, `value`: *unknown*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | *unknown* |

**Returns:** *void*

___

### setOnce

▸ **setOnce**(`key`: *string*, `value`: *unknown*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | *unknown* |

**Returns:** *void*

___

### unset

▸ **unset**(`key`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *void*
