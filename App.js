import React from 'react'
import { ScrollView, Alert } from 'react-native'

import { Layout } from '@components/Layout'
import { Header } from '@components/Header'
import Vector from './assets/Vector.svg'
import BigButton from '@components/BigButton'
import SearchBox from '@components/SearchBox'

export default () => {
  onPressButton = () => {
    Alert.alert(
      'button clicked'
    )
  }

  return(
    <>
      <Header />
      <Layout>
        <ScrollView>
          <BigButton onPress={onPressButton} />
          <SearchBox onPress={onPressButton} />
        </ ScrollView>
      </Layout>
    </>
  )
}