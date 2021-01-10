
# @amplitude/react-native

## Getting started

`$ npm install @amplitude/react-native --save`

### Mostly automatic installation

`$ react-native link @amplitude/react-native`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `@amplitude/react-native` and add `RNAmplitudeReactNative.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAmplitudeReactNative.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNAmplitudeReactNativePackage;` to the imports at the top of the file
  - Add `new RNAmplitudeReactNativePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':@amplitude/react-native'
  	project(':@amplitude/react-native').projectDir = new File(rootProject.projectDir, 	'../node_modules/@amplitude/react-native/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':@amplitude/react-native')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNAmplitudeReactNative.sln` in `node_modules/@amplitude/react-native/windows/RNAmplitudeReactNative.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Amplitude.React.Native.RNAmplitudeReactNative;` to the usings at the top of the file
  - Add `new RNAmplitudeReactNativePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNAmplitudeReactNative from '@amplitude/react-native';

// TODO: What to do with the module?
RNAmplitudeReactNative;
```
  