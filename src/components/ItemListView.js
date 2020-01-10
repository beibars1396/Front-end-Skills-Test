import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-native'

const Container = styled.TouchableOpacity`
    height: 71px;
    width: 343px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
    backgroundColor: #FEFEFE;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const InfoContainer = styled.View`
    margin: 10px;
    flex-direction: row;
`

const InfoText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #151515;

    width: 176px;
    margin-left: 9px;
`

const PriceContainer = styled.View`
    margin: 10px;
    align-items: flex-end;
`

const TotalPriceText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #151515;
`

const PriceInfoText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;

    color: rgba(0, 0, 0, 0.6);
`

const DiscountInfoText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #FF2929;
`

const DefaultImage = styled.View`
    height: 51px;
    width: 35px;
    background: #DFDFDF;
    border-radius: 3px;

    align-items: center;
    justify-content: center;
`

export default ({ onPress, item }) => (
    <Container onPress={onPress} activeOpacity={0.75} >
        <InfoContainer>
            {item.imageSource ? <Image source={item.imageSource} style={{width: 36, height: 51, borderRadius: 3}} /> : <DefaultImage>
                <Image source={require('../../assets/wine-default.png')} style={{width: 18, height: 18}} />
            </DefaultImage>}
            <InfoText>
                {item.name}
            </InfoText>
        </InfoContainer>
        <PriceContainer>
            <TotalPriceText>
                {item.totalPrice}
            </TotalPriceText>
            <PriceInfoText>
                {item.priceInfo}
            </PriceInfoText>
            <DiscountInfoText>
                {item.discountInfo}
            </DiscountInfoText>
        </PriceContainer>
    </Container>
)
