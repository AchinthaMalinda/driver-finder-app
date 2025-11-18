import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userRegister = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email.trim(), password);
        } catch (error) {
            Alert.alert("Email Exists");
        }
    };

    return (
        <View style={{ padding: 16,marginTop: 250 }}>
            <TextInput style={{borderWidth:2,margin:2}} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none"/>
            <TextInput style={{borderWidth:2,margin:2}} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Register" onPress={userRegister}/>
            <Button title="Have an account? Login" onPress={() => navigation.navigate("Login")}/>
        </View>
    );
}