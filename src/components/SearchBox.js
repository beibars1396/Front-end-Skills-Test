import React from 'react'
import styled from 'styled-components'

const Container = styled.TouchableOpacity`
    margin-top: 16px;
    height: 50px;
    width: 343px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
    backgroundColor: #FFFFFF;

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
`

export default ({ onPress }) => (
    <Container onPress={onPress} activeOpacity={0.75} >
        <ScannButton onPress={onPress} activeOpacity={0.75} />
    </Container>
)
