import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { colours } from '../constants/Colors';

export default function ThemedView({style, ...props}) {
    const colorScheme = useColorScheme();
    const theme = colours[colorScheme] || colours.light;
  return (
    <View style={[
       { backgroundColor: theme.background}, style
      
    ]}  {...props}/>
  )
}

const styles = StyleSheet.create({})