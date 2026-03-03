import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedButton = ({ style, children, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  }
})