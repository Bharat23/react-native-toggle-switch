# react-native-toggle-switch
Toggle Switch UI Component for React Native Apps ( iOS and Android Compatible )

## Content

- [Features](#features)
- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Features

* Plug-n-Play, easy to use module
* Supports multiple buttons as well
* Light-weight and compatible with both iOS and Android

## Installation

* 1.Run `npm i react-native-toggle-switch --save`
* 2.`import ToggleSwitch from 'react-native-toggle-switch'`    

## Demo  
* [Example](https://snack.expo.io/B10brxnwf)

![Screenshots](https://github.com/Bharat23/react-native-toggle-switch/raw/master/assets/ezgif.com-crop.gif)

## Getting started  

To Get Started, Import `react-native-toggle-switch` to your js file.   

`import ToggleSwitch from 'react-native-toggle-switch'` 

Inside your component's render method, or any other method returning views, use ToggleSwitch:   

```javascript
<ToggleSwitch
    labels={ [ 'ON', 'OFF' ] }
    size={ 30 }
    onToggle={ (val) => console.log('changed to : ', val) }
/>;
```

## API

Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
labels  | Array of Strings  | false | 'false'  |   Label which will appear on Toggle Switch Buttons
activeColor | String |true |  'blue' | Active Color
activeTextColor  |  String | true | '#fff' | Text Color of Active Button
inactiveColor | String| true | 'rgba(0, 0, 0, 0.5)'  | Inactive Color
inactiveTextColor | String | true | '#fff'  | Text Color of inactive Button
size | Number | true |  30 | Size of the toggle switch button, maintains a 2:3 ratio of height:width
onToggle | Function Callback | false |  none | Callback when the toggle switch component changes the state, Param: SwitchObject { index, label, state }

## Contribution

If you encountered an Issue, please add a screenshot of the bug or a code snippet. 

Quickest way to solve issue is to reproduce it on the example project

Pull requests are welcome. If you want to change the API or imporove something, feel free to create an issue and discuss it first.

---

**MIT Licensed**
