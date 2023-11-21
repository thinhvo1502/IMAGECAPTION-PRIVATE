import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Camera, useCameraDevice, useCameraPermission, } from "react-native-vision-camera";
function CaptionGenerator(){
    const { hasPermission, requestPermission} = useCameraPermission('true');
    const device = useCameraDevice('back');
    return(
        requestPermission('true'),
        // requestPermission('true'),
        <View style={styles.container}>
      <Camera style={styles.camera}
      device ={device} 
      isActive = {true}/>
      <TouchableOpacity style={styles.captureButton}>
        <Text style={styles.captureButtonText}>Capture</Text>
      </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    camera: {
      height: '100%',
      width: '100%',
      
    },
    captureButton: {
      backgroundColor: 'red',
      borderRadius: 50,
      padding: 15,
      marginBottom: 20,
      
    },
    captureButtonText: {
      color: 'white',
    },
  });
export default CaptionGenerator