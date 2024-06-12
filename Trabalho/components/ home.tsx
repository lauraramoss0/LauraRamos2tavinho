import React from 'react';
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Sobre from './sobre';
import Fundo from '../assets/images/FUNDO.png';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
            return (

                <ImageBackground source={Fundo} style={styles.container}>
                    <Text style={styles.title}>Página Principal</Text>
                    <Text style={styles.title}>Exemplo 1</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Clique aqui</Text>
                    </TouchableOpacity>
                </ImageBackground>

            );

        } else if (page === 'sobre') {
            return <Sobre />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>
}

const styles = StyleSheet.create({

    ImageBackground:{
      

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 500, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
