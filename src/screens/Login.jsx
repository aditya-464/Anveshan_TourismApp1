import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_CLIENT_ID} from '@env';

const Login = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loader, setLoader] = useState(false);
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn();
      if (res) {
        console.log(res.user);
        setUserInfo(res.user);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({webClientId: GOOGLE_CLIENT_ID});
  }, []);

  return (
    <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
      <StatusBar
        backgroundColor={COLORS.blackDark}
        barStyle={'light-content'}></StatusBar>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../assets/images/ok3.jpg')}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
          style={styles.LinearGradient}>
          <View style={styles.Content}>
            <Text style={styles.Heading}>Welcome!</Text>
            <Text style={styles.Subheading}>
              Embark on a Journey of Discovery
            </Text>
            <TouchableOpacity
              onPress={() => {
                setLoader(true);
                handleGoogleSignIn();
              }}
              activeOpacity={1}
              style={styles.Button}>
              {!loader && (
                <>
                  <Image
                    style={styles.Icon}
                    source={require('../assets/images/google.png')}></Image>
                  <Text style={styles.ButtonText}>Continue with Google</Text>
                </>
              )}
              {loader && (
                <ActivityIndicator
                  animating={loader}
                  size={31}
                  color={COLORS.blackDark}></ActivityIndicator>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleAppleSignIn()}
              activeOpacity={1}
              style={styles.Button}>
              <Image
                style={styles.Icon}
                source={require('../assets/images/apple.png')}></Image>
              <Text style={styles.ButtonText}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  LinearGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Content: {
    marginHorizontal: SPACING.space_24,
    marginBottom: SPACING.space_30,
  },
  Heading: {
    fontFamily: FONTFAMILY.cormorantGaramond_bold,
    fontSize: 40,
    color: COLORS.white,
    textAlign: 'center',
  },
  Subheading: {
    fontFamily: FONTFAMILY.harmattan_regular,
    fontSize: FONTSIZE.size_20,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.space_30,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.space_20,
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.space_8,
    borderRadius: 50,
  },
  Icon: {
    width: 25,
    height: 25,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.harmattan_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.blackDark,
    paddingLeft: SPACING.space_10,
  },
});
