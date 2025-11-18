import React, {useEffect,useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DriversListScreen from "../screens/DriversListScreen";
import DriverProfileScreen from "../screens/DriverProfileScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setUser(user));
        return unsub;
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Drivers" component={DriversListScreen} />
                        <Stack.Screen name="Driver Profile" component={DriverProfileScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );         
}