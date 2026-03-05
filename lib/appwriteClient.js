import { Client, Account, Avatars, Databases } from 'react-native-appwrite'

export const client = new Client()
  .setProject("699d6661003a0be505d8")
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)

