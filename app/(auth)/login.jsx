import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link, useRouter } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../contexts/UserContext'
import { Colors } from '../../constants/Colors'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { login } = useUser();
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError(null)
      await login(email, password);
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

      <ThemedView style={styles.container} safe={true}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Login to your account
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
          {loading ? 'Logging in...' : 'Login'}
        </ThemedButton>
        <Spacer height={10} />
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
        <Spacer height={100} />
        <Link href={'/register'}>
          <ThemedText style={{ textAlign: 'center' }}>Don't have an account? Register</ThemedText>
        </Link>
        <Spacer height={20} />
        <Link href={'/profile'}>
          <ThemedText style={{ textAlign: 'center' }}>Profile</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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