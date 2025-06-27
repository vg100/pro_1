import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState();
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleVerify = () => {
    // const code = otp.join('');
    if (code.length === 4) {
      // TODO: Add verification logic here
      // router.replace('DashBoard'); // Replace with your actual route
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Check your phone</Text>
      <Text style={styles.subtitle}>
        We've sent you the code to your registered e-mail
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) inputRefs.current[index] = ref;
            }}
            style={styles.otpBox}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.tryAnother}>Try another way</Text>
      </TouchableOpacity>

      <Text style={styles.timerText}>
        Code Expires in <Text style={styles.timer}>{formatTimer()}</Text>
      </Text>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={handleVerify}
        disabled={otp.some((d) => d === '')}
      >
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.resendButton, timer > 0 && styles.disabledButton]}
        disabled={timer > 0}
        onPress={() => {
          // TODO: Resend OTP logic
          setTimer(270);
        }}
      >
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerification;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.12,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: height * 0.05,
    left: width * 0.05,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#0042D2',
    textAlign: 'center',
    marginBottom: height * 0.015,
  },
  subtitle: {
    fontSize: width * 0.04,
    textAlign: 'center',
    color: '#333',
    marginBottom: height * 0.04,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: height * 0.03,
  },
  otpBox: {
    width: width * 0.15,
    height: width * 0.15,
    borderWidth: 1,
    borderColor: '#0042D2',
    borderRadius: width * 0.02,
    textAlign: 'center',
    fontSize: width * 0.07,
    color: '#000',
  },
  tryAnother: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#333',
    fontSize: width * 0.04,
    marginBottom: height * 0.02,
  },
  timerText: {
    textAlign: 'center',
    fontSize: width * 0.04,
    color: '#333',
    marginBottom: height * 0.02,
  },
  timer: {
    color: '#0042D2',
    fontWeight: '600',
  },
  verifyButton: {
    backgroundColor: '#0042D2',
    paddingVertical: height * 0.015,
    borderRadius: width * 0.05,
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  verifyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: width * 0.05,
  },
  resendButton: {
    backgroundColor: '#add8e6',
    paddingVertical: height * 0.015,
    borderRadius: width * 0.05,
    alignItems: 'center',
  },
  resendText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: width * 0.05,
  },
  disabledButton: {
    opacity: 0.5,
  },
});