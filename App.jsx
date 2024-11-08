/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import WebView from 'react-native-webview';

  const handleError = syntheticEvent => {
    const {nativeEvent} = syntheticEvent;
    console.error('Error en el WebView:', nativeEvent);
    Alert.alert('Error', 'Ha ocurrido un error al cargar reCAPTCHA.');
  };

  const handleHttpError = syntheticEvent => {
    const {nativeEvent} = syntheticEvent;
    console.error('HTTP Error:', nativeEvent.statusCode, nativeEvent.url);
    Alert.alert('Error de HTTP', `Código de estado: ${nativeEvent.statusCode}`);
  };

  const handleMessage = event => {
    const data = event.nativeEvent.data;
    console.log('Mensaje recibido del WebView:', data);

    if (data.includes('recaptcha-failed')) {
      Alert.alert('Error', 'La validación de reCAPTCHA ha fallado.');
    }
  };

function App() {
  return (
       <View style={styles.container}>
        <WebView
          source={{ uri: 'https://epicmychartnp.optum.com/MyChartPOC/openscheduling/standalone?id=565&startDate=2024-11-05' }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          originWhitelist={['*']}
          onError={handleError}
          onHttpError={handleHttpError}
          onMessage={handleMessage}
          webviewDebuggingEnabled={true}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semitransparente para la carga
  },
});

export default App;
