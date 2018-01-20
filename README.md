# react-native-toggle-switch
Toggle Switch UI Component for React Native Apps ( iOS and Android Compatible )

## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm i react-native-toggle-switch --save`
* 2.`import ToggleSwitch from 'react-native-toggle-switch'`    

<!-- ## Demo  
* [Example](https://github.com/aminebenkeroum/toggle-switch-react-native/tree/master/example)

![Screenshots](https://raw.githubusercontent.com/aminebenkeroum/toggle-switch-react-native/master/example/Screenshots/Screenshot.gif) -->

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
activeColor | String |true |  '#634fc9' | On Color
activeTextColor  |  String | true | '#ecf0f1' | Off Color
inactiveColor | String| true |   | Custom Label Text on the Left of the toggle Button
inactiveTextColor | Object | true | {marginHorizontal: 10}  | Custom Styling for the Label Text View
size | Number | true |  30 | Size of the toggle switch button, maintains a 2:3 ratio of height:width
onToggle | Function Callback | false |  none | Callback when the toggle switch component changes the state, Param: SwitchObject { index, label, state }

## Contribution

If you encountered an Issue, please add a screenshot of the bug or a code snippet. 

Quickest way to solve issue is to reproduce it on the example project

Pull requests are welcome. If you want to change the API or imporove something, feel free to create an issue and discuss it first.

---

**MIT Licensed**