import React from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native'

import ItemListView from './ItemListView'
import FooterListView from './FooterListView'

const Container = styled.View`
    margin-top: 26px;
`

const CountView = styled.View`
    flex-direction: row;
`

const InfoView = styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 5px;
`

const InfoText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: right;

    color: #151515;
`

const CountText = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-align: right;

    color: #151515;
`

const Separator = styled.View`
    height: 10px;
`

export default ({ onPress }) => {
    const items = [
        {
            name: 'Kendall Jackson Vintner`s Reserve Chardonnay',
            totalPrice: '$349.38',
            imageSource: require('../../assets/wine.jpg')
        }, 
        {
            name: 'Kendall Jackson Vintner`s Reserve Chardonnay Luxury Wine',
            totalPrice: '$4,439.98',
            priceInfo: '2 x $2.035.67',
            imageSource: require('../../assets/wine1.jpg') 
        }, 
        {
            name: 'Kendall Chardonnay',
            totalPrice: '$349.38'
        }, 
        {
            name: 'Kendall Jackson Vintner`s Reserve Chardonnay',
            totalPrice: '$5,349.38',
            imageSource: require('../../assets/wine.jpg')
        }, 
        {
            name: 'Jackson Luxury Wine',
            totalPrice: '$439.98',
            priceInfo: '2 x $345.67',
            discountInfo: '10% (-$25.99)',
            imageSource: require('../../assets/wine1.jpg')
        }, 
    ]

    return (
        <Container>
            <InfoView>
                <CountView>
                    <CountText>7</CountText>
                    <InfoText> items</InfoText>
                </CountView>
                <InfoText>#0134234</InfoText>
            </InfoView>
            <FlatList
                    data = { items }
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ItemListView item={item} onPress={onPress} />}
                    ItemSeparatorComponent={ Separator }
                    ListFooterComponent={ <FooterListView/> }
                />
        </Container>
    )
}
