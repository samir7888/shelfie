import { StyleSheet, useColorScheme, Text } from 'react-native'
import { Colors } from '../constants/Colors';

export default function ThemedText({ title = false, style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;
  const textColor = title ? theme.title : theme.text;
  return (
    <Text style={[{ color: textColor }, style]} {...props} />
  )
}

const styles = StyleSheet.create({})