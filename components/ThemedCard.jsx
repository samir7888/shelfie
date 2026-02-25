import { View, useColorScheme } from 'react-native'
import { colours } from '../constants/Colors';

const ThemedCard = ({style, ...props}) => {
     const colorScheme = useColorScheme();
        const theme = colours[colorScheme] || colours.light;
  return (
    <View style={[{backgroundColor: theme.uiBackground}, style, styles.card ]}  {...props} />
  )
}

const styles = {
    card: {
        borderRadius: 5,
        padding: 20,
    }
}


export default ThemedCard