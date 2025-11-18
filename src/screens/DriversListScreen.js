import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Button } from "react-native";
import { Drivers } from "../data/drivers";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";


export default function DriversListScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [vehicleFilter, setVehicleFilter] = useState("All");
    const [availabilityFilter, setAvailabilityFilter] = useState("All");
    const [selectedDriver, setSelectedDriver] = useState(Drivers);

    useEffect(() => {
        runSearch();
    }, [searchQuery, vehicleFilter, availabilityFilter]);

    const runSearch = () => {
        const q = searchQuery.toLowerCase();
        const filtered = Drivers.filter(driver => {
            const name = driver.name.toLowerCase();
            const vehicle = driver.vehicleType.toLowerCase();
            const availability = driver.availability.toLowerCase();

            const matchesSearch =
                q === "" || 
                name.includes(q) ||
                vehicle.includes(q) ||
                availability.includes(q);

            const matchesVehicle = vehicleFilter === "All" || driver.vehicleType === vehicleFilter;
            const matchesAvailability = availabilityFilter === "All" || driver.availability === availabilityFilter;

            return matchesSearch && matchesVehicle && matchesAvailability;
        });
        setSelectedDriver(filtered);
    };

    return (
        <View style={{ flex: 1, padding: 12 }}>
            <View style={{ flexDirection: "row", marginBottom: 8, alignItems: "center", marginTop:20, marginBottom:20}}>
                <TextInput
                    placeholder="Search by name, vehicle, availability"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={{ flex: 1, borderWidth: 1, padding: 8, margin:2 }}
                />
                <Button title="Logout" onPress={() => signOut(auth)} />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10, justifyContent: "space-between" }}>

            {["All", "Car", "Bike", "Van"].map((type) => (
                <TouchableOpacity key={type} onPress={() => setVehicleFilter(type)}>
                <Text
                    style={{
                    padding: 6,
                    borderWidth: 1,
                    borderColor: "#007AFF",
                    borderRadius: 5,
                    backgroundColor: vehicleFilter === type ? "#007AFF" : "#ADD8E6",
                    color: vehicleFilter === type ? "#FFFFFF" : "#000000",
                    }}
                >
                    {type === "All" ? "All Vehicles" : type}
                </Text>
                </TouchableOpacity>
            ))}
            </View>


            <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between" }}>
            {["All", "Available", "Unavailable"].map((status) => (
                <TouchableOpacity key={status} onPress={() => setAvailabilityFilter(status)}>
                <Text
                    style={{
                    padding: 6,
                    borderWidth: 1,
                    borderColor: "#007AFF",
                    borderRadius: 5,
                    backgroundColor: availabilityFilter === status ? "#007AFF" : "#D3D3D3",
                    color: availabilityFilter === status ? "#FFFFFF" : "#000000",
                    }}
                >
                    {status}
                </Text>
                </TouchableOpacity>
            ))}
            </View>


            <FlatList
                data={selectedDriver}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Driver Profile", { driver: item })}
                        style={{ padding: 12, borderBottomWidth: 1,backgroundColor:"#E0FFFF", marginBottom:5 }}
                    >
                        <Text style={{fontWeight: "bold" }}>{item.name}</Text>
                        <Text>{item.vehicleType} - {item.availability}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}