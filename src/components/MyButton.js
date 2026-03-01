import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native"

const MyButton = ({title = 'Button', children, onPress = () => {}}) => {

    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8
            }}
            onPress={() => onPress()}>
            <Text style={{ color: 'white', fontSize: 24 }}>
                {children ?? title}
            </Text>
        </TouchableOpacity>
    );
};

MyButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired
};

export default MyButton;