import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
    align-items: flex-end;
    margin-top: 20px;
`

const CountView = styled.View`
    flex-direction: row;
    align-items: center;
`

const Text = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;

    color: rgba(0, 0, 0, 0.6);
`

const DiscountText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #FF2929;
`

const DiscountNumber = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;

    color: #FF2929;
`

const TotalText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #151515;
`

// font-family: Open Sans;

export default () => (
    <Container>
        <CountView>
            <Text>Discount: </Text>
            <DiscountNumber>10% </DiscountNumber>
            <DiscountText>(-$25.99)</DiscountText>
        </CountView>
        <CountView>
            <Text>Total: </Text>
            <TotalText>$1,300.00</TotalText>
        </CountView>
    </Container>
)
