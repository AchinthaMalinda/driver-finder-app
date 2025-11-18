import React, {useState} from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = async() => {
        try {
            await signInWithEmailAndPassword(auth, email.trim(), password);
        } catch (error) {
            Alert.alert("Incorrect Email or Password");
        }
    };

    return (
        <View style={{ padding: 16, marginTop: 250 }}>
            <TextInput style={{borderWidth:2,margin:2}} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none"/>
            <TextInput style={{borderWidth:2, margin:2}} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Login" onPress={userLogin} />
            <Button title="No account? Register" onPress={() => navigation.navigate("Register")}/>
        </View>
    );
}
