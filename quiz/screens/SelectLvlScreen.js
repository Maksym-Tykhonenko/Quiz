import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


const SelectLvlScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, }}>
      <ImageBackground
        source={require('../assets/bgrQuiz.jpeg')}
        style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

              <TouchableOpacity
                onPress={()=>{navigation.navigate('LvlGermany')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3, marginBottom: 15 }}>
                <Image
                  source={require('../assets/prapor/german.jpeg')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 1 - Germany</Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={false}
              onPress={()=>{navigation.navigate('LvlFrance')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3, marginBottom: 15 }}>
                <Image
                  source={require('../assets/prapor/france.webp')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 2 - France</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{navigation.navigate('LvlAustria')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3, marginBottom: 15 }}>
                <Image
                  source={require('../assets/prapor/austria.webp')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 3 - Austria</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{navigation.navigate('LvlAustralia')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3, marginBottom: 15 }}>
                <Image
                  source={require('../assets/prapor/australia.jpeg')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 4 - Australia</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{navigation.navigate('LvlCanada')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3,marginBottom: 15  }}>
                <Image
                  source={require('../assets/prapor/canada.webp')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 5 - Canada</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={()=>{navigation.navigate('LvlItaly')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3, marginBottom: 15 }}>
                <Image
                  source={require('../assets/prapor/italy.jpeg')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 6 - Italy</Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={false}
              onPress={()=>{navigation.navigate('LvlUsa')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3, marginBottom: 15 }}>
                <Image
                  source={require('../assets/prapor/USA.webp')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 7 - USA</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{navigation.navigate('LvlIndia')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3, marginBottom: 15 }}>
                <Image
                  source={require('../assets/prapor/india.jpeg')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 8 - India</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{navigation.navigate('LvlSpain')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3, marginBottom: 15 }}>
                <Image
                  source={require('../assets/prapor/spain.jpeg')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 9 - Spain</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{navigation.navigate('LvlMaxica')}}
                style={{ flex: 1, alignItems: 'center', borderColor: '#f5c65d', borderWidth: 2, borderRadius: 3 }}>
                <Image
                  source={require('../assets/prapor/maxica.jpeg')}
                  style={{ width: 300, height: 150, borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                <Text style={{color:'#f5c65d', fontSize: 22, fontWeight: '600'}}>Lvl 10 - Mexica</Text>
              </TouchableOpacity>

            </ScrollView>

            
                            
          </SafeAreaView>
                    {/**Go Back BTN */}
                        <TouchableOpacity
                            onPress={() => { navigation.goBack() }}
                            style={{ position: 'absolute', bottom: 15, right: 15, borderWidth: 3, borderRadius: 3, height: 60, width: 60, justifyContent: "center", alignItems: "center", borderColor: '#f5c65d', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                            <Text style={{ color: '#f5c65d', fontWeight: '600' }}>Go</Text>
                            <Text style={{ color: '#f5c65d', fontWeight: '600' }}>back</Text>
                        </TouchableOpacity>
        </View>
                
      </ImageBackground>
                
      
    </View>
  );
};

export default SelectLvlScreen;