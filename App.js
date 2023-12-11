/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {Image} from 'react-native';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Routes from './src/routes';
// import Routes from './screens/routes';
const slides = [
  {
    key: 1,
    title: "A Beginner's Guide to Running and Exercise",
    text: 'Description.\nSay something cool',
    image: require('./assets/icons/running.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Your Ultimate Gym Routine',
    text: 'Other cool stuff',
    image: require('./assets/icons/report.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'The Path to Healthier Eating',
    text: "I'm already out of descriptions\nLorem ipsum bla bla bla",
    image: require('./assets/icons/diet_2.png'),
    backgroundColor: '#22bcb5',
  },
];
const App = () => {
  const [slider, setSlider] = useState(false);
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: 10,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <Image style={{height: 300, width: 300}} source={item.image} />
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {item.text}
        </Text>
      </View>
    );
  };
  const onDone = () => {
    setSlider(true);
  };
  if (slider) {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Routes />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <AppIntroSlider
          renderItem={renderItem}
          showPrevButton={true}
          prevLabel={<Text style={{color: '#fff'}}>Prev</Text>}
          doneLabel={<Text style={{color: '#fff'}}>Skip</Text>}
          data={slides}
          nextLabel={<Text style={{color: '#fff'}}>Next</Text>}
          onDone={onDone}
        />
      </View>
    );
  }
  // return (
  //   <Provider store={store}>
  //     <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
  //       <Routes />
  //     </SafeAreaView>
  //   </Provider>
  // );
};

export default App;
