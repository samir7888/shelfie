import { StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ThemedView({ style, safe = false, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;
  const insets = useSafeAreaInsets();

  const viewStyle = [
    { backgroundColor: theme.background },
    safe && {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    },
    style
  ];

  return (
    <View style={viewStyle} {...props} />
  )
}

const styles = StyleSheet.create({})