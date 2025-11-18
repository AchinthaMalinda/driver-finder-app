import React from "react";
import { View, Text } from "react-native";

export default function DriverProfileScreen({ route }) {
    const { driver } = route.params;

    return (
        <View style={{ padding: 50, alignItems: "center" ,borderWidth:2, backgroundColor:"#ADD8E6",marginTop:250}}>
            <Text style={{ fontSize: 20, fontWeight: "bold",marginBottom:2}}>{driver.name}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold"}}>Vehicle Type: {driver.vehicleType}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold"}}>Availability: {driver.availability}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold"}}>Contact: {driver.phone}</Text>
        </View>
    );
}