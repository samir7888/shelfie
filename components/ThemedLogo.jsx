
import { useColorScheme } from 'react-native';
import DarkLogo from '../assets/img/logo_dark.png';
import LightLogo from '../assets/img/logo_light.png';
import { Image } from 'react-native';
const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme();
    const img = colorScheme === 'dark' ? DarkLogo : LightLogo;
  return (
    <Image source={img} {...props}  />
  )
}

export default ThemedLogo