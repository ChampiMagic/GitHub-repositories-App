import React from "react";
import { Formik, useField } from "formik";
import { View, Button, StyleSheet } from "react-native";
import StyledTextInput from "../StyledTextInput.jsx";
import StyledText from "../StyledText";
import { loginValidationSchema } from '../ValidationSchemas/login'



const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyledTextInput
            error={meta.error}
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
            />
            {meta.error && <StyledText style={{ color: 'red', fontSize: 12, marginBottom: 20, marginTop: -5}}>{meta.error}</StyledText>}
        </>
    )
}

export default function Login() {

    const initialValue = {
        email: '',
        password: ''
    }

    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValue} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return (
                    <View style={{ margin: 12 }}>
                         <FormikInputValue
                         name='email'
                         placeholder="E-mail"
                         />
                         <FormikInputValue
                          name='password'
                          placeholder="Password"
                          secureTextEntry
                         />
                         <Button onPress={handleSubmit} title='Log In' />
                    </View>
                )
            }}
        </Formik>
    )
}

