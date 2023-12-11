/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Profile = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#000',
          height: '45%',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomRightRadius: 50,
        }}>
        <Image
          source={require('../../../assets/icons/photo-1503023345310-bd7c1de61c7d.jpeg')}
          style={styles.imageBackground}
        />
        <Text
          style={{color: '#fff', fontSize: 20, fontWeight: 'bold', top: 20}}>
          Test User
        </Text>
        <Text style={{color: '#fff', fontSize: 12, top: 20}}>
          Support@mobiroller.com
        </Text>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', top: 20}}>
          Profile Informations
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    width: '27%',
    height: '30%',
    borderRadius: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add an overlay with some transparency
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default Profile;
