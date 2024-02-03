import React,{useState,useRef,useEffect} from 'react';
import {
  ImageBackground,
  Text,
    View,
} from 'react-native';

const LvlFrance = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>

            <ImageBackground
                source={require('../assets/bgrQuiz.jpeg')}
                style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    
                    <View>
                        <Text style={{ color:'gold', fontSize: 30}}>France</Text> 
                    </View>
                    
                </View>
                
            </ImageBackground>

        </View>
    );
};

export default LvlFrance;