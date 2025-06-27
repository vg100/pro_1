import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [selectedRole, setSelectedRole] = useState('Teacher');
  const [orgCode, setOrgCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isNextDisabled = orgCode.length !== 5 || password.length === 0;

  const handleNextPress = () => {
    if (isNextDisabled) {
      setErrorMessage('Please fill in all fields correctly');
    } else {
      setErrorMessage('');
      navigation.navigate('Dashboard'); // Replace with your target screen
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.upperSection}>
        <Text style={styles.logoText}>Practivoo</Text>
        <Text style={styles.subText}>Please enter the org code &{'\n'}password to continue</Text>
        <Text style={[styles.loginTitle, styles.login ]}>Login</Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.lowerSection}>
        {/* Role Switcher */}
        <View style={styles.roleSwitch}>
          {['Student', 'Teacher'].map(role => (
            <TouchableOpacity
              key={role}
              style={[styles.roleButton, selectedRole === role && styles.activeRole]}
              onPress={() => setSelectedRole(role)}
            >
              <Text style={[styles.roleText, selectedRole === role && styles.activeRoleText]}>
                {role}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Org Code Input */}
        <View style={[styles.inputContainer, orgCode.length > 0 && { borderColor: '#0042D2' }]}>
          <Image source={require('../assets/build.png')} style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginRight: 8,
          }} />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Organization Code"
            placeholderTextColor="#999"
            value={orgCode}
            onChangeText={setOrgCode}
            keyboardType="numeric"
            maxLength={5}
          />
          {orgCode.length === 5 && (
            <Image source={require('../assets/correct.png')} style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              marginRight: 8,
            }} />
          )}
        </View>

        {/* Password Input */}
        <View style={[styles.inputContainer, password.length > 0 && { borderColor: '#0042D2' }]}>
          <Image source={require('../assets/lock.png')} style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginRight: 8,
          }} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword
                  ? require('../assets/eyeson.png') // eye-open icon
                  : require('../assets/eyesoff.png') // eye-closed icon
              }
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginRight: 8,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotContainer} onPress={() => setModalVisible(true)}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Submit */}
        <TouchableOpacity
          style={[styles.submitButton, isNextDisabled && { backgroundColor: '#add8e6' }]}
          // disabled={isNextDisabled}
          onPress={handleNextPress}
        >

          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>

        {/* Error Message */}
        {errorMessage !== '' && (
          <View style={styles.errorBox}>
            <Image source={require('../assets/build.png')} style={styles.errorIcon} />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        )}

        {/* OR Line */}
        <View style={styles.footerLine}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Admin Login */}
        <TouchableOpacity>
          <Text style={styles.adminText}>Log in as school admin</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.bottomModal}>
            <Text style={styles.modalText}>Continue with?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalOptionButton}>
                <Text style={styles.modalOptionText}>Set New Password</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOptionButtonWhite}>
                <Text style={styles.modalOptionTextBlack}>OTP</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0042D2' },
  upperSection: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  logo: { width: 70, height: 70, marginBottom: 10 },
  logoText: { color: '#fff', fontSize: 30, fontWeight: '600', fontFamily: 'Poppins-SemiBold' },
  loginTitle: {
    color: '#fff',
    fontSize: 24,
    justifyContent:'center',
    alignItems:'center',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    alignSelf: 'flex-start',
    marginTop: 30,
    marginBottom: 40
  },
  subText: {
    color: '#cce0ff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-start',
  },
  lowerSection: {
    flex: 0.55,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  roleSwitch: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeRole: { backgroundColor: '#0042D2' },
  roleText: { color: '#000', fontWeight: '500', fontFamily: 'Poppins' },
  activeRoleText: { color: '#fff', fontWeight: '600', fontFamily: 'Poppins-SemiBold' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingVertical: 10,
  },
  inputIcon: { width: 25, height: 20, marginRight: 8 },
  inputEndIcon: { width: 25, height: 20, marginLeft: 8 },
  forgotContainer: { alignItems: 'flex-end', marginBottom: 20 },
  forgotText: { color: 'red', fontSize: 13, fontFamily: 'Poppins-Regular' },
  submitButton: {
    backgroundColor: '#0042D2',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  errorBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  errorIcon: { width: 18, height: 18, marginRight: 6 },
  errorMessage: { color: 'red', fontSize: 14, textAlign: 'center' },
  footerLine: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  line: { flex: 1, height: 1, backgroundColor: '#ccc' },
  orText: { marginHorizontal: 8, color: '#888', fontFamily: 'Poppins-Regular' },
  adminText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  bottomModal: {
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },

  modalText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 20,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },

  modalOptionButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
  },

  modalOptionText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },

  modalOptionButtonWhite: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
  },

  modalOptionTextBlack: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },

  closeModalText: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
  },
  bottomErrorBox: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // for Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  bottomErrorText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },



});

