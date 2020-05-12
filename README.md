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

- In app.json:

```
"orientation": "portrait", // vertical
"orientation": "landscape", // horizontal
"orientation": "default", // It can be use in both directions (vertical and horizontal)
```

- Naming Conventions in React Native: component.ios.js, component.androind.js

# Module 6 (Nagitation with React Navigation [The Meals App])

- yarn add @react-navigation/native
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- yarn add @react-navigation/stack
- yarn add react-native-screens
- Navigation Methods
  1. push
  2. pop
  3. replace
  4. goBack
  5. popToTop
