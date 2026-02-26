import { Pressable, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { colours } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
export default function Login() {
  const handleSubmit = () => {
    console.log('Login button pressed');
  }
  return (
    <ThemedView style={styles.container}>
        <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to your account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={{color: 'white'}}>Login</Text>
      </ThemedButton>
      <Spacer height={100} /> 
      <Link href={'/register'}>
      <ThemedText style={{ textAlign: 'center'}}>Don't have an account? Register</ThemedText>
      </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({  
  container :{
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },

})