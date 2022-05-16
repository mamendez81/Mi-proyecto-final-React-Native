import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"; 


const GrupCard = () => {
    
    
    return (
        
        
            <View style={styles.cardContainer}>
            <Image 
            style={styles.imageStyle}
            source={require('../assets/pngegg.png')}
            />
            <View style={styles.infoStyle}>
            <Text style={styles.titleStyle}>Grups list</Text>
            <Text>Info Grup</Text>
            </View>
            
            </View>
        
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth -25, 
        backgroundColor: '#a29bfe',
        height: 200,
        borderRadius: 20,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        elevation: 9,
    },
    imageStyle :{
        height: 130,
        width: deviceWidth -25,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    }
});

export default GrupCard;