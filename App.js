import React from 'react'
import { ScrollView, Alert } from 'react-native'

import { Layout } from '@components/Layout'
import { Header } from '@components/Header'
import Vector from './assets/Vector.svg'
import BigButton from '@components/BigButton';

export default () => {
  onPressButton = () => {
    Alert.alert(
      'button clicked'
    )
  }

  return(
    <Layout>
      <Header />
      <ScrollView>
        <BigButton onPress={onPressButton} />
      </ ScrollView>
    </Layout>
  )
}
