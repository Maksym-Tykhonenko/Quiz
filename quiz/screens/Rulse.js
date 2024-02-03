import React,{useState,useRef,useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
    View,
  Animated
} from 'react-native';

const RulesScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>

            <ImageBackground
                source={require('../assets/bgrQuiz.jpeg')}
                style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    
                    <View>
                            
                    </View>
                    
                </View>
                
            </ImageBackground>

        </View>
    );
};

export default RulesScreen;