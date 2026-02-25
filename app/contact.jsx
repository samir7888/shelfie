import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../components/ThemedView';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const Contact = () => {
  return (
    <ThemedView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <ThemedText style={{fontSize: 30}}>Contact</ThemedText>
      <Spacer />
      <ThemedText style={{fontStyle: 'italic'}} >This is the contact page</ThemedText>
      <Spacer />
      <Link href="/" style={styles.link} ><ThemedText>Go to home</ThemedText></Link>
    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
    link: {
        borderBottomWidth: 2,
        marginVertical: 20,
    }
})