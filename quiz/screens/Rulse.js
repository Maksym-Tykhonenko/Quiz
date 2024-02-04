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
                <View style={{ flex: 1,position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                    
                    <View>
                            
                    </View>


                    {/**Go Back BTN */}
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{ position: 'absolute', bottom: 15, right: 15, borderWidth: 3, borderRadius: 10, height: 60, width: 60, justifyContent: "center", alignItems: "center", borderColor: '#f5c65d',backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                        <Text style={{ color: '#f5c65d', fontWeight: '600' }}>Go</Text>
                        <Text style={{ color: '#f5c65d', fontWeight: '600' }}>back</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </ImageBackground>

        </View>
    );
};

export default RulesScreen;