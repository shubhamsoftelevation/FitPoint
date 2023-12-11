/* eslint-disable react-native/no-inline-styles */
import {Formik} from 'formik';
import React, {useState} from 'react';
import {View} from 'react-native';
import * as yup from 'yup';
import {Button, Text, TextInput} from 'react-native-paper';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const errorText = err => {
    return (
      <Text
        style={{fontSize: 14, color: '#DA3D25', marginLeft: 5, marginTop: 5}}>
        {err}
      </Text>
    );
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
      }}>
      <Formik
        // innerRef={formikRef}
        enableReinitialize
        initialValues={{
          first_name: '',
          last_name: '',
          email_id: '',
          password: '',
        }}
        validateOnMount={true}
        onSubmit={console.log('lkdkld')}
        validationSchema={yup.object().shape({
          last_name: yup.string().min(1).required('Last Name is required'),
          first_name: yup.string().min(1).required('First Name is required'),
          email_id: yup.string().min(1).required('Email is required'),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          setFieldValue,
          handleSubmit,
          isValid,
          dirty,
          setFieldError,
        }) => (
          <>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}>
              <View>
                <TextInput
                  mode="outlined"
                  value={values.first_name}
                  error={touched.first_name && errors.first_name}
                  onChangeText={handleChange('first_name')}
                  onBlur={() => setFieldTouched('first_name')}
                  label={'First Name*'}
                  style={{marginTop: 6}}
                  placeholder={'First Name*'}
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  returnKeyType="next"
                />
                {touched.first_name ? errorText(errors.first_name) : ''}
                <TextInput
                  mode="outlined"
                  value={values.last_name}
                  error={touched.last_name && errors.last_name}
                  onChangeText={handleChange('last_name')}
                  onBlur={() => setFieldTouched('last_name')}
                  label={'Last Name *'}
                  style={{marginTop: 6}}
                  placeholder={'Last Name *'}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                />
                {touched.last_name ? errorText(errors.last_name) : ''}
                <TextInput
                  mode="outlined"
                  value={values.email_id}
                  error={touched.email_id && errors.email_id}
                  onChangeText={handleChange('email_id')}
                  onBlur={() => setFieldTouched('email_id')}
                  label={'Email Address'}
                  style={{marginTop: 6}}
                  placeholder={'Email Address'}
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  returnKeyType="next"
                />
                {touched.email_id ? errorText(errors.email_id) : ''}
                <TextInput
                  mode="outlined"
                  value={values.password}
                  error={touched.password && errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  label={'Password'}
                  style={{marginTop: 6}}
                  placeholder={'Password'}
                  secureTextEntry={showPassword}
                  autoCapitalize="none"
                  returnKeyType="done"
                  right={
                    <TextInput.Icon
                      name={
                        showPassword
                          ? require('../../../assets/icons/eye.png')
                          : require('../../../assets/icons/hidden.png')
                      }
                      // name={() => (
                      //   <Image
                      //     tintColor={'red'}
                      //     source={
                      //       !showPassword
                      //         ? require('../../../assets/icons/eye.png')
                      //         : require('../../../assets/icons/hidden.png')
                      //     }
                      //     style={{height: 20, width: 30}}
                      //   />
                      // )}
                      onPress={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  }
                />
              </View>
              <View>
                <Button
                  style={{borderRadius: 10}}
                  buttonColor="#5c9bd6"
                  mode="contained"
                  onPress={() => console.log('Pressed')}>
                  Press me
                </Button>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginPage;
