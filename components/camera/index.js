import React, { PureComponent } from "react";
import { RNCamera } from "react-native-camera";
import { Alert, StyleSheet, View, Dimensions } from "react-native";
import {
  yellowGreen,
  chestnut,
  sapGreen,
  lincolnGreen,
  darkGreen,
} from "../../Colors";

export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
    };
  }

  takePic = async () => {
    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      try {
        this.camera.resumePreview();
        const data = await this.camera.takePictureAsync(options);
        this.setState({ takingPic: true });
        Alert.alert("Success", JSON.stringify(data));
      } catch (err) {
        Alert.alert("Failed :( " + err.message);
        return;
      } finally {
        this.setState({ takingPic: false });
      }
    }
  };

  barcodeFound = (e) => {
    Alert.alert("Barcode Found: " + e.data);
  };

  render() {
    return (
      <View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={{
            flex: 1,
            backgroundColor: "#6ED4C8",
            width: Dimensions.get("window").width,
            height: 700,
          }}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          onBarCodeRead={this.barcodeFound}
        />

        {/* <TouchableOpacity 
                activeOpacity = {.5}
                style = { styles.btnAlignment }
                onPress={this.takePic}>
                    <Text style= { styles.textFormat }>Take Picture!</Text>
                </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnAlignment: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    height: 40,
    backgroundColor: "#ffffff",
  },

  textFormat: {
    fontSize: 35,
  },
});
