import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { colours } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const LayoutComponent = () => {
    const colorScheme = useColorScheme();
    const theme = colours[colorScheme] || colours.dark;
  return (
    <>
    <StatusBar value='auto' />
        <Stack screenOptions={
            {
                headerStyle: {backgroundColor: theme.navBackground},
                headerTintColor: theme.title,
            }
        }>
            <Stack.Screen name="(auth)" options={{headerShown: false}} />
            <Stack.Screen name="index" options={{headerTitle: 'Home'}} />
        </Stack>
            </>
  )
}

export default LayoutComponent

const styles = StyleSheet.create({})