import { Text as RNText, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './Text.presets';

export default function Text({ children, preset = "default", style }) {
    //  preset and style compose   to textStyles
    const textStyles = StyleSheet.compose(presets[preset], style);
    return (
        <RNText style={textStyles}>
            {children}
        </RNText>
    )
}

/*

*/