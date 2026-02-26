import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
export default function Register() {
   const handleSubmit = () => {
    console.log('Register button pressed');
  }
  return (
    <ThemedView style={styles.container}>
        <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register to your account
      </ThemedText>
       <ThemedButton onPress={handleSubmit}>
        <Text style={{color: 'white'}}>Register</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href={'/login'}>
      <ThemedText style={{ textAlign: 'center'}}>Do you have account already? LogIn</ThemedText>
      </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  }
})