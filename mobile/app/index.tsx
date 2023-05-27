/* eslint-disable react/no-unescaped-entities */
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import * as SecureStore from 'expo-secure-store'
import { useRouter } from 'expo-router'

import { styled } from 'nativewind'

import Logo from '../src/assets/logo.svg'
import blurBg from '../src/assets/luz.png'
import Stripes from '../src/assets/stripes.svg'

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import React, { useEffect } from 'react'
import { api } from '../src/lib/api/api'

const StyledStripes = styled(Stripes)
const NLWLogo = styled(Logo)

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/7b0c99e295998a00c82d',
}

export default function App() {
  const router = useRouter()

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  // Making a request to the Auth endpoint to get the code
  const [request, response, signInWithGitHub] = useAuthRequest(
    {
      clientId: '7b0c99e295998a00c82d',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime',
      }),
    },
    discovery,
  )

  async function handleGitHubOAuthCode(code: string) {
    const response = await api.post('/register', {
      code,
    })

    const token = response.data
    await SecureStore.setItemAsync('token', token)
    router.push('/memories')
  }

  // Receiving the code
  useEffect(() => {
    // console.log(
    //   makeRedirectUri({
    //     scheme: 'nlwspacetime',
    //   }),
    // )

    if (response?.type === 'success') {
      const { code } = response.params
      handleGitHubOAuthCode(code)
    }
  }, [response])

  if (!hasLoadedFonts) return null

  return (
    <ImageBackground
      source={blurBg}
      imageStyle={{ position: 'absolute', left: '-100%' }}
      className="relative flex-1 items-center justify-center bg-gray-900 py-10"
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />
        <Text className="font-title text-2xl text-gray-50">
          Your time capsule
        </Text>
        <Text className="max-w-[300px] text-center font-body text-lg text-gray-100">
          Collect remarkable moments of your journey and share them (if you
          want) with the world!
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
          onPress={() => signInWithGitHub()}
          disabled={!request}
        >
          <Text className="font-alt text-sm uppercase text-black">
            START CREATING MEMORIES
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Made with 💜 at Rocketseat's NLW
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
