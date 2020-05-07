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

# Module 2 (React Native Basics)

- [Flexbox Cheat Sheet](https://reactnative.dev/docs/flexbox)
- FlatList is for rendering array of items where you dont know how many items are going to be inside of the array. ScrollView is better if you know the exact amount of items
  to be rendered on the View
- [React Native Core Components](https://reactnative.dev/docs/components-and-apis)

### Touchable Components

1. TouchableOpacity
2. TouchableHighlight
3. TouchableNativeFeedback
4. TouchableWithoutFeedback

# Module 3 (Debugging React Native Apps)

### What to Debug?

- Remote Debugger in Expo: Ctrl + M
- react native debugger

```
In your project
yarn add react-devtools@^3 --dev
then add "devtools": "react-devtools" to script in package.json
and try yarn devtools
```

# Module 4 (Components, Styling and Layouts)

- [Official Color References](https://reactnative.dev/docs/colors)
- [List of available icons to use in React Native](https://icons.expo.fyi/)
- [Native Base UI Library](https://github.com/GeekyAnts/NativeBase)
- [React Native Elements](https://github.com/react-native-training/react-native-elements)

# Module 5 (Responsive & Adaptive User Interfaces and Apps)
