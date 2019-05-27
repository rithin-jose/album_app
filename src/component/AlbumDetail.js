import React from 'react';
import {Text, View, StyleSheet, Image, Linking} from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail =({album}) => { //destructured props and album
    const {title,artist,thumbnail_image,image,url}=album;//dest
    const {//destructuring of style object
        thumbnailContainerStyle,
        thumbnailStyle,
        headerContainerStyle,
        headerTextStyle,
        imageStyle,
    }= styles
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{uri:thumbnail_image}}
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headerContainerStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                source={{uri:image}}
                style={imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!!
                </Button>
            </CardSection>
        </Card>
    );
}

const styles = StyleSheet.create({
    headerContainerStyle:{
        flexDirection:'column',
        justifyContent:'space-around',
    },
    headerTextStyle:{
        fontSize:18,
    },
    thumbnailStyle:{
        height:50,
        width:50,
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
    }, 
   imageStyle:{
       height:300,
       flex:1,
       width:null,
   }
});
export default AlbumDetail;