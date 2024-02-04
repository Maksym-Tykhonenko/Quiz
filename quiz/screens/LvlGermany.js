import React, { useState, useRef, useEffect } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Modal, TextInput , Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { germanHotels } from '../data/germanHotels';

const LvlGermany = ({ navigation }) => {
    const [startMassiv, setStartMassiv] = useState(germanHotels);
    const [sights, setSights] = useState(startMassiv);
    console.log('sights', sights.length);
    const [sightsImg, setSightsImg] = useState(startMassiv);
    //console.log('sightsImg', sightsImg.length)
    const [shuffledSightsImg, setShuffledSightsImg] = useState([]);
    //console.log('length==>', shuffledSightsImg.length)

    const [actButnTitle, setActButnTitle] = useState(-1);
    const [actBtnImg, setActBtnImg] = useState(-1);
    //console.log('==>', actButnTitle, actBtnImg)
    const [btnIsVisible, setBtnIsVisible] = useState(false);
    const [quizIsComplited, setQuizIsComplited] = useState(false);

    const goTooAppAfterQuizComplited = () => {
        setBtnIsVisible(false);
        navigation.navigate('QuizScreen')
    };

    useEffect(() => {
        setBtnIsVisible(false)
        if (shuffledSightsImg.length === 0) {
            setBtnIsVisible(true)
        }
    }, [shuffledSightsImg]);

    // Функція для перемішування масиву
    const shuffleArray = (array) => {
        const newArray = [...array]; // Створюємо копію масиву
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Генеруємо випадкове число
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Переставляємо елементи масиву
        }
        return newArray; // Повертаємо перемішаний масив
    };

    // Функція для перемішування масиву sightsImg перед рендерингом
    useEffect(() => {
        setShuffledSightsImg(shuffleArray(sights));
    }, [sights]);

    // Функція для зміни кольору в кнопці з імедж
    const changeColorInImg = (id) => {
        if (id === actBtnImg && id === actButnTitle) {
            return 'green';
        }
        return '#f5c65d'
    };

    {/** */ }
    // Функція для видалення об'єкта за його id
    const removeSightById = (id) => {
        const updatedSights = sights.filter(item => item.id !== id);
        //setStartMassiv(updatedSights)
        setSights(updatedSights);
        setShuffledSightsImg(updatedSights);
        setActButnTitle(-1)
        setActBtnImg(-1)
    };

    // Викликати цю функцію всередині useEffect, щоб видалити елемент з масиву після зміни стану
    useEffect(() => {
        if (actButnTitle !== -1 && actButnTitle === actBtnImg) {
            removeSightById(actButnTitle);
        }
    }, [actButnTitle, actBtnImg]);
    return (
        <View style={{ flex: 1, }}>

            <ImageBackground
                source={require('../assets/bgrQuiz.jpeg')}
                style={{ flex: 1 }}>
                
                <SafeAreaView style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                            onPress={() => {  }}
                            style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5c65d', width: 250, height: 80, borderWidth: 2, borderColor: '#f5c65d', borderRadius: 10 }}>
                            
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 30 }}>TAIMER</Text>
                            </TouchableOpacity>
                    <View style={{ flex: 1, position: 'relative', marginTop: 30, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-around' }}>

                        

                        {/* Блок кнопок з назвами */}
                        <View style={{ flex: 0.5, alignItems: 'center' }}>
                            <Text style={{ marginLeft: 20, marginBottom: 10, color: '#f5c65d', fontWeight: 'bold', fontSize: 20 }}>Categories: </Text>
                        
                            <ScrollView>
                            
                                {/* Блок кнопок з назвами */}
                                {sights.map((item, index) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setActButnTitle(item.id);
                                        }}
                                        style={{
                                            marginBottom: 10,
                                            width: 150,
                                            height: 135,
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            backgroundColor: actButnTitle === item.id ? 'green' : '#0395e0',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: 5,
                                            borderColor: actButnTitle === item.id ? 'green' : 'gold',
                                        }}
                                        key={item.id}
                                    >
                                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.hotel}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Полоска */}
                        <View style={{ borderWidth: 1, borderColor: 'red' }}></View>

                        {/* Блок зображень */}
                        <View style={{ flex: 0.5, alignItems: 'center' }}>

                            <Text style={{ marginBottom: 10, color: '#f5c65d', fontWeight: 'bold', fontSize: 20 }}>Photos: </Text>

                            <ScrollView>
              
                                {/* Блок зображень */}
                                {shuffledSightsImg.map((item) => (
                                    <TouchableOpacity
                                        onPress={() => { setActBtnImg(item.id) }} // Обробник події натискання на зображення
                                        style={{
                                            marginBottom: 10,
                                            borderWidth: 8,
                                            borderRadius: 15,
                                            borderColor: changeColorInImg(item.id)
                                        }}
                                        key={item.id}
                                    >
                                        <Image style={{ width: 150, height: 119, borderRadius: 10 }} source={item.photo} />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>

                        </View>
                   
                        {/* Кнопка перехода на Home Screen */}
                        {btnIsVisible && <TouchableOpacity
                            onPress={() => { goTooAppAfterQuizComplited() }}
                            style={{ position: 'absolute', top: '50%', right: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5c65d', width: 250, height: 80, borderWidth: 2, borderColor: '#f5c65d', borderRadius: 10 }}>
                            
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>Congratulations!!!</Text>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}> Go to next Lvl  <Entypo name='arrow-bold-right' style={{ fontSize: 20 }} /></Text>
                        </TouchableOpacity>}
                
                    </View>


                    




                    {/**Go Back BTN */}
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{ position: 'absolute', bottom: 15, right: 15, borderWidth: 3, borderRadius: 10, height: 60, width: 60, justifyContent: "center", alignItems: "center", borderColor: '#f5c65d', }}>
                        <Text style={{ color: '#f5c65d', fontWeight: '600' }}>Go</Text>
                        <Text style={{ color: '#f5c65d', fontWeight: '600' }}>back</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                
            </ImageBackground>

        </View>
    );
};

export default LvlGermany;