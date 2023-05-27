import { styled } from 'nativewind'
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Logo from '../assets/logo.svg'
import blurBg from '../assets/luz.png'
import Stripes from '../assets/stripes.svg'

const StyledStripes = styled(Stripes)
const NLWLogo = styled(Logo)

export const Hero = () => {
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
        >
          <Text className="font-alt text-sm uppercase text-black">
            START CREATING MEMORIES
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Made with 💜 at Rocketseat's NLW
      </Text>
      <StatusBar translucent />
    </ImageBackground>
  )
}
