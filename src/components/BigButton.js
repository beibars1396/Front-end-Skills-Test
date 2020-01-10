import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-native'

const Container = styled.TouchableOpacity`
    margin-top: 16px;
    height: 50px;
    width: 343px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    border-radius: 60px;
    backgroundColor: #28A745;
`

const Text = styled.Text`
    margin-left: 9.33px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;
`

export default ({ onPress }) => (
    <Container onPress={onPress} activeOpacity={0.75} >
        <Image source={require('../../assets/club-member.png')} style={{width: 16.67, height: 15.83}} />
        <Text>Club member</Text>
    </Container>
)
