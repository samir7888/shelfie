import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedButton = ({style, ...props}) => {
  return (
   <Pressable style={({pressable}) => [styles.btn, pressable && styles.pressed, style]} {...props} />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
     btn: {
        backgroundColor: Colors.primary,
        width: 'fit-content',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 5,
      },
      pressed: {
        opacity: 0.7,
      }
})