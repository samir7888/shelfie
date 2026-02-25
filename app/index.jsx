import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router';
import ThemedImage from '../components/ThemedImage';
import ThemedView from '../components/ThemedView';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import ThemedCard from '../components/ThemedCard';

const Home = () => {
  return (
    <ThemedView style={[styles.container]} >
     <ThemedImage  />
      <Spacer />
      <ThemedText style={[styles.title ]}>Home</ThemedText>
      <Spacer height={10} />
      <ThemedText style={{fontStyle: 'italic'}} >Reading List Done!</ThemedText>
      <Spacer />
      <ThemedCard style={styles.card}>
        <ThemedText style={{fontStyle: 'italic'}} >Wishlist Done!</ThemedText>
      </ThemedCard>

      <Link href="/about" style={styles.link} >
      <ThemedText>
        
        Go to about
        </ThemedText>
      </Link>
      <Link href="/contact" style={styles.link} ><ThemedText>Go to Contact</ThemedText></Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        boxShadow: '4px 3px rgba(20, 9, 235, 0.1)',
    },
    link: {
        borderBottomWidth: 2,
        color: 'blue',
        marginVertical: 20,
    }
});

export default Home