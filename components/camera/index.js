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

import { main }  from "../../APIFunctions";

const allergy = [  
"mollusc_allergy",
"mustard_allergy",
"sesame_allergy",
"gluten_allergy",
"lactose_intolerance",
"soy_allergy",
"egg_allergy",
"fish_allergy",
"celergy_allergy",
"crustacean_allergy",
"peanut_allergy",
"tree_nut_allergy",
"wheat_allergy",
"lupin_allergy",
"milk_allergy",];
const diet = "vegetarian";

export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
    };
  }

  // function for capturing images, currently not used
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

      let lol = main('3184670026410', allergy, diet);
      console.log(lol);

      this.props.nav.navigate("About");
    
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
      </View>
    );
  }
}
