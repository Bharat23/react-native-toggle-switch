import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class ToggleSwitch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleButton: [ true, ...Array(props.labels.length - 1).fill(false) ]
        };
        console.log('this.props', this.state.toggleButton);
		this.props = props || {};
        let { 
            activeColor, 
            activeTextColor, 
            inactiveColor, 
            inactiveTextColor, 
            onToggle,
            size
        } = this.props;
        let height = size || 30;
        let width = height * (3/2);
        this.styles = StyleSheet.create({
            toggleSwitchContainer: {
                flexDirection: 'row'
            },
            toggleButton: {
                borderRadius: 3.0,
                backgroundColor: inactiveColor || 'rgba(0, 0, 0, 0.5)',
                height,
                width,
                alignItems: 'center',
                justifyContent: 'center',
            },
            toggleButtonActive: {
                backgroundColor: activeColor || 'blue',
                opacity: 1
            },
            toggleButtonText: {
                fontSize: 14,
                fontWeight: "normal",
                fontStyle: "normal",
                letterSpacing: 0.06,
                textAlign: "center",
                color: inactiveTextColor || '#fff'
            },
            toggleButtonActiveText: {
                color: activeTextColor || '#fff'
            }
        });    
    }

    _renderToggleButton = (index, label) => {
        
        return (
            <TouchableOpacity
                onPress={ () => {
                    let toggleButton = Array(2).fill(false);
                    toggleButton[index] = true;
                    this.setState({ toggleButton });
                    this.props.onToggle({ index, label, state: true });
                } }
            >
                <View style={ [this.styles.toggleButton, this.state.toggleButton[index] && this.styles.toggleButtonActive ] }>
                    <Text style={ this.styles.toggleButtonText }>{ label || ' ' }</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        let { labels } = this.props;
        const toggleSwitch = labels.map((label, index) => this._renderToggleButton(index, label))
        return (
            <View style={ this.styles.toggleSwitchContainer }>
                { toggleSwitch }
            </View>
        );
    }
    
};

ToggleSwitch.propTypes = {
    activeColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    labels: PropTypes.arrayOf( PropTypes.string ).isRequired,
    size: PropTypes.number
};

const wrapper = () => {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ToggleSwitch 
        onToggle = { (a) => console.log(a) } 
        labels = { ['ON', 'OFF'] }
        />
    </View>
  );
}

export default wrapper;