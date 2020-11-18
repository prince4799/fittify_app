import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BottomNavigator ({props}) {
   

    return ( 
      <View style={{backgroundColor:'black'}}>
         <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'black',
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 50,
            zIndex:10,
          }}>
           <TouchableOpacity
              onPress={()=>props.navigation.navigate('Pain')}>
            <Image
              style={{
                width: 60,
                height: 60,
                alignSelf: 'center',
                marginTop: 4,
              }}
              resizeMode="contain"
              source={{
                uri:
                  'https://icon-library.net/images/android-plus-icon/android-plus-icon-0.jpg',
              }}
            />
            </TouchableOpacity>
          </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#b2b5c2',
            border: 10,
            radius: 3,
            style: { marginVertical: 10 },
            bottom:0,
            width: Dimensions.get("window").width,
            height:80,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical:15,
            paddingHorizontal:25,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height:null,
              width:null,
              marginStart:0,
            }}>
            <TouchableOpacity
              onPress = {()=>props.navigation.navigate('Pain')}>
              <Image
                style={{ width: 30, height: 30 }}
                source={{
                  uri:
                    'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png',
                }}
               />
            </TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
              Home
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginStart:10,           }}>
            <TouchableOpacity
               >
              <Image
                style={{ width: 30, height: 30, }}
                source={{
                  uri:
                    'http://simpleicon.com/wp-content/uploads/active-search.png',
                }}
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
              search{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft:70,}}>
            <TouchableOpacity
             >
              <Image
                source={{
                  uri:
                    'http://pixsector.com/cache/a1dd5a90/av895b2bd52a42e99ee3c.png',
                }}
                
                style={{ width: 30, height: 30 }}
               
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
              Menu{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginStart:20,
            }}>
            <TouchableOpacity
              >
              <Image
                source={{
                  uri:
                    'https://img.icons8.com/ios-filled/72/settings.png',
                }}
                style={{width: 30, height: 30, }}
                
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
              Setting
            </Text>
          </View>
          </View>
          </View>
    );
    }