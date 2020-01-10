import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
    flex-direction: row;

    margin-top: 20px;
`

const View = styled.View`
    justify-content: space-between;
`

const OrderButton = styled.TouchableOpacity`
    background: #FFFFFF;
    border-radius: 3px;
    height: 50px;
    width: 130px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);

    align-items: center;
    justify-content: center;
`

const NewOrderText = styled.Text`
    color: #151515;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
`

const CancelOrderText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.6);
`

const CheckoutButton = styled.TouchableOpacity`
    height: 110px;
    width: 205px;
    background: #002A5C;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    border-radius: 3px;

    align-items: center;
    justify-content: center;

    margin-left: 8px;
`

const CheckoutText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
`


export default ({ onPress }) => (
    <Container> 
        <View>
            <OrderButton onPress={onPress} activeOpacity={0.75} >
                <NewOrderText>New order</NewOrderText>
            </OrderButton>
            <OrderButton onPress={onPress} activeOpacity={0.75} >
                <CancelOrderText>Cancel oder</CancelOrderText>
            </OrderButton>
        </View>
        <CheckoutButton onPress={onPress} activeOpacity={0.75} >
            <CheckoutText>Checkout</CheckoutText>
        </CheckoutButton>
    </Container>
)
