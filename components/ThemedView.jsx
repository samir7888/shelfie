import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

export default function ThemedView({style, ...props}) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;
  return (
    <View style={[
       { backgroundColor: theme.background}, style
      
    ]}  {...props}/>
  )
}

const styles = StyleSheet.create({})