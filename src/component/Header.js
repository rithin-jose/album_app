import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const Header = (props) =>{
    return(
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#f8f8f8',
      height: 60,
      paddingTop:10,
      shadowColor:'#000',
      shadowOffset:{height: 2,width:0},
      shadowOpacity:0.2,
      elevation: 2,
      position:'relative',
    },
    textStyle:{
      fontSize:20,
    }
  });
  
export default  Header;