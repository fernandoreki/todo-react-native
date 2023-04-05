import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native/';
import useTask from "../hooks/useTask";

const screenHeight = Dimensions.get('screen').height

const HomeScreen = () => {
    const { showAdd } = useTask();
    const [showWeather, setShowWeather] = useState(false);
    return (
        <SafeAreaView style={{ marginHorizontal: 20, marginTop: 10 }}>
            {
                showAdd && (
                    //Contenedor del input
                    <View>
                        <TextInput
                            placeholder="Agregar nueva tarea"
                            style={styles.input}
                            value={task}
                            onChangeText={editTask}
                        />
                        <View>
                            <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={addTask}>
                                <Text>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.cancelarButton]} onPress={addTask}>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.addButton}></TouchableOpacity>
                <TouchableOpacity style={styles.weatherButton} onPress={() => showWeather ? setShowWeather(false):setShowWeather(true)}>
                    <Text>Clima</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        backgroundColor: '#1F0245',
        borderRadius: 10,
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 60,
        width: 60,
        backgroundColor: '#EF05F2',
    },
    addButtonContainer: {
        position: 'absolute',
        top:screenHeight - 160,
        right: 10,
        flexDirection: 'row',
    },
    weatherButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 60,
        width: 60,
        backgroundColor: '#0511C3',
    }
});

export default HomeScreen;