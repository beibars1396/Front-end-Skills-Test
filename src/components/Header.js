import React from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Header } from 'react-native-elements'

const UserNameText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    margin: 9px;
    color: #151515;
`

const MenuButton = styled.TouchableOpacity`
    width: 32px;
    height: 30.21px;
    background: #151515;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
`

const UserNameContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 7px;
`

export default ({ onPress }) => (
    <Header
        containerStyle={{
            backgroundColor: '#FEFEFE'
        }}
        leftComponent={
            <MenuButton onPress={onPress} activeOpacity={0.75} >
                <Image source={require('../../assets/menu-button.png')} style={{width: 32, height: 32}} />
            </MenuButton>
        }
        centerComponent={
            <UserNameContainer onPress={onPress} activeOpacity={0.75} >
                <Image source={require('../../assets/photo-profile.png')} style={{width: 30, height: 30, borderRadius: 25}} />
                <UserNameText>
                    Johnissimus Van-Doe
                </UserNameText>
                <Image source={require('../../assets/arrow.png')} style={{width: 11.17, height: 6.58}} />
            </UserNameContainer>
        }
    />
)