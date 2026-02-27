import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ThemedView({style, safe = false, ...props}) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    if (!safe) {
      <View style={[
       { backgroundColor: theme.background}, style
      
    ]}  {...props}/>
    }


    const insets = useSafeAreaInsets();
  return (
    <View style={[
       { backgroundColor: theme.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right

       }, style
      
    ]}  {...props}/>
  )
}

const styles = StyleSheet.create({})