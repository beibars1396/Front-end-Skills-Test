import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-native'

const Container = styled.TouchableOpacity`
    margin-top: 16px;
    height: 50px;
    width: 343px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
    backgroundColor: #FEFEFE;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const ScannButton = styled.TouchableOpacity`
    background: #151515;
    border-radius: 2px;
    height: 44px;
    width: 75px;
    margin: 3px;
    align-items: center;
    justify-content: center;
`

export default ({ onPress }) => (
    <Container onPress={onPress} activeOpacity={0.75} >
        <Image source={require('../../assets/search-button.png')} style={{width: 20, height: 20.84, margin: 15}} />
        <ScannButton onPress={onPress} activeOpacity={0.75}>
            <Image source={require('../../assets/scan-button.png')} style={{width: 24, height: 20.84}} />
        </ScannButton>
    </Container>
)
