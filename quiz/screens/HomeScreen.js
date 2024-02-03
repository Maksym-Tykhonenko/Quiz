import React,{useState,useRef,useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
    View,
  Animated
} from 'react-native';


const HomeScreen = ({ navigation }) => {
     /////////////////////////////////////
  const [loaderIsLoaded, setLoaderIsLoaded] = useState(false);
    const ChangeInView = props => {
        const fadeAnim = useRef(new Animated.Value(1)).current;
        const appearingAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 4000,
                useNativeDriver: true,
            }).start();
        }, []);

        useEffect(() => {
            Animated.timing(appearingAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }).start();


            setTimeout(() => {
                setLoaderIsLoaded(true)
            }, 8000);

        }, []);

        return (
            <View style={{ position: 'relative', flex: 1 }}>
                <Animated.Image
                    source={require('../assets/bgrQuiz.jpeg')}
                    style={{
                        ...props.style,
                        opacity: fadeAnim,
                        height: '100%',
                    }}
                />
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '40%',
                        transform: [
                            { translateX: -100 }, // Adjust these values based on your text size
                            { translateY: -25 },
                        ],
                        opacity: appearingAnim,
                    }}><Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Animated.Text style={{ color: '#f5c65d', fontSize: 60, fontWeight: 'bold' }}>HELLO!!!</Animated.Text>
                        <Animated.Text style={{ color: '#f5c65d', fontSize: 60, fontWeight: 'bold' }}>I`TS QUZE</Animated.Text>
                        <Animated.Text style={{ color: '#f5c65d', fontSize: 60, fontWeight: 'bold' }}>GAME</Animated.Text>
                    </Animated.View>
                
                </Animated.View>
            </View>
    
        );
    };
  /////////////////////////////////////
    return (
        <View style={{ flex: 1, }}>

            {!loaderIsLoaded ? (
                <ChangeInView
                    style={{
                        width: '100%',
                        //height: 50,
                        backgroundColor: 'powderblue',
                    }}>
       
                </ChangeInView>
            ) : (
                <ImageBackground
                    source={require('../assets/bgrQuiz.jpeg')}
                    style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    
                        <View>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('SelectLvl') }}
                                style={{ borderWidth: 3, borderRadius: 10, paddingHorizontal: 20, marginHorizontal: 7, height: 50, width: 250, justifyContent: "center", alignItems: "center", marginBottom: 25,marginTop: -20, borderColor: '#f5c65d', }}>
                                <Text style={{ color: '#f5c65d', fontSize: 23, fontWeight: '600' }}>GAME</Text>
                            </TouchableOpacity>

                                <TouchableOpacity 
                                    onPress={() => { navigation.navigate('Rules') }}
                                    style={{ borderWidth: 3, borderRadius: 10, paddingHorizontal: 20, marginHorizontal: 7, height: 50, width: 250, justifyContent: "center", alignItems: "center", marginBottom: 15, borderColor: '#f5c65d', }}>
                                <Text style={{ color: '#f5c65d', fontSize: 23, fontWeight: '600' }}>RULSE</Text>
                            </TouchableOpacity>
                        </View>
                    
                    </View>
                
                </ImageBackground>
            )}

           
      
        </View>
    );
};

export default HomeScreen;