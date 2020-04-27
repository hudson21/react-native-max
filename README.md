# Module 1 (Getting Started)

### What is React Native
- It is a collection of special React Components
- Components compiled to Native Widgets
- Native Platform APIs exposed to JavaScript(Camera functionalities, etc...)
- Connects JavaScript and Native Platform Code

### How React Native works behind the scenes
```
const App = props => {
  return(
    <View>
      <Text>Hello There! </Text>
    </View>
  );
}
```

### Expo or React Native CLI ?
- Expo CLI/Tool
  1. Third Party Service (Free!)
  2. Managed App Development
  3. Lots of Convenience & Utility Features: Simplifies Development
  4. But you are limited to the Expo Ecosystem
- React Native CLI
  1. By React Native Team/Community
  2. Bare-bone Development (only a Basic Setup)
  3. Almost no Convenience or Utility Features
  4. Full Flexibility: Integrate with any Native Code
- https://expo.io 

### Command to create a Expo React Native Project
- expo init name-of-the-project

### Running App on Android Emulator
- https://docs.expo.io/workflow/android-studio-emulator/?redirected
- Have installed Android Studio with the following plugins:
  1. Latest two versions of Android
  2. Android SDK Build-Tools, Android Emulator, Androind SDK Platform-Tools, Google Play Services, Intes X86 Emulator Accelerator (HAXM installer)
  3. 
