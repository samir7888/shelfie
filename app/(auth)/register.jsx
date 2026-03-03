import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link, useRouter } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../contexts/UserContext'
import { Colors } from '../../constants/Colors'
export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register } = useUser();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError(null)
      await register(email, password);
      router.replace("/")
    } catch (error) {
      console.log(error);
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register to your account
        </ThemedText>
        <ThemedTextInput placeholder="Email" keyboardType='email-address'
          style={{ marginBottom: 10, width: '80%', borderColor: 'black', borderWidth: 1 }}
          onChangeText={setEmail}
          value={email}
        />
        <ThemedTextInput placeholder="Password" secureTextEntry={true} style={{ marginBottom: 10, width: '80%', borderColor: 'black', borderWidth: 1 }}
          onChangeText={setPassword}
          value={password}
        />
        <ThemedButton onPress={handleSubmit} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </ThemedButton>
        <Spacer height={10} />
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
        <Spacer height={100} />
        <Link href={'/login'}>
          <ThemedText style={{ textAlign: 'center' }}>Do you have account already? LogIn</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  error: {
    color: Colors.error,
    padding: 10,
    borderRadius: 5,    
    borderWidth: 1,
    backgroundColor: '#f5d1d4',
    borderColor: Colors.error,
    textAlign: 'center',
    marginTop: 10,
    width: '80%',
  }
})