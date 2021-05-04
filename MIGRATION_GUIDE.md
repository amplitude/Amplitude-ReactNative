# Migrating from amplitude-js to @amplitude/react-native:

## Steps:

 1. Remove amplitude-js from your package.json

 2. Install @amplitude/react-native

 3. If targeting iOS, cd into `/ios` and run `pod install`
 
 4. Replace imports with one of the following:
    - `import { Amplitude } from '@amplitude/react-native'`
    - `import { Identify } from '@amplitude/react-native'`
    - `import { Amplitude, Identify } from '@amplitude/react-native'`

  5. The API's between the two libraries are very similar but there are some subtle differences discussed below.  You can reference the [documentation](https://amplitude.github.io/Amplitude-ReactNative/modules.html) for detailed API documentation and typing for `@amplitude/react-native`:
		-  calls to `Amplitude.getInstance().init` only require passing your API key.  There is no options object.  
		 - The following `amplitude-js` methods are not supported in `@amplitude/react-native`:
			 - `setDomain`
			 - `isNewSession`
			 - `setVersionName`
			 - `logEventWithTimestamp`
			 - `logEventWithGroups`

		- A significant change is that `@amplitude-react/native` does not export a revenue class.  Instead, it is replaced with calls to the following method: `Amplitude.getInstance().logRevenue` [documentation](https://amplitude.github.io/Amplitude-ReactNative/classes/amplitude.html#logrevenue)

		- Because there is no support for `logEventWithTimestamp` or `logEventWithGroups`.  You can simulate this functionality by providing your own custom timestamp or calling `setGroup` before calling `logEvent`.
