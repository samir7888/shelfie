import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { colours } from '../constants/Colors';

export default function ThemedText({title = false, style, ...props}) {
    const colorScheme = useColorScheme();
    const theme = colours[colorScheme] || colours.light;
    const textColor = title ? theme.title : theme.text;
  return (
    <Text style={[{color: textColor}, style]} {...props} />
  )
}

const styles = StyleSheet.create({})