// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { height } = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Image source={require('../assets/logopencil.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.logoText}>Practivoo</Text>
      </View>

      <View style={styles.lowerSection}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.subText}>Practice Today</Text>
        <Text style={styles.subTexts}>Progress Tomorrow</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0047FF',
  },
  upperSection: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  lowerSection: {
    flex: 0.45,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 32,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    color: 'black',
    top: -51,
    textTransform: 'uppercase'
  },
  subTexts: {
    fontSize: 16,
    color: 'black',
    top: -79,
    textTransform: 'uppercase'
  },
  button: {
    backgroundColor: '#0047FF',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginBottom: 44,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
