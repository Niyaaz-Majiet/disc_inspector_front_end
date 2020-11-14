import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const SummaryScreen = ({ navigation, route }) => {
  const [modalOpend, setModalOpened] = useState(false);
  const vehicleInfo = route.params;

  const toggleModal = () => {
    setModalOpened(!modalOpend);
  };

  const HandleDone = () => {
    navigation.navigate("thankyou");
  };

  const handlePdfGeneration = () => {
    alert(`This feature is under development`);
  };

  return (
    <View style={globalStyles.summaryContainer}>
      <View style={globalStyles.summaryParagraphContainer}>
        <Text style={globalStyles.summaryHeader}>Hi Sir/Madam,</Text>
        {vehicleInfo.expired ? (
          <View>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Your {vehicleInfo.Model} {vehicleInfo.Make}{" "}
              {vehicleInfo.VehicleDescription} is not up to date. Days since
              expiration : {vehicleInfo.days * -1}
            </Text>
            {vehicleInfo.days * -1 < 21 && (
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Licesnse still valid for {21 - vehicleInfo.days * -1} days
              </Text>
            )}
            <Text></Text>
          </View>
        ) : (
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Your {vehicleInfo.Model} {vehicleInfo.Make}{" "}
            {vehicleInfo.VehicleDescription} is up to date. Days to expiration :{" "}
            {vehicleInfo.days}
          </Text>
        )}
      </View>
      {modalOpend ? (
        <View
          style={{
            height: 200,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginBottom: 15,
            }}
            onPress={() => toggleModal()}
          >
            <Text
              style={{
                alignSelf: "center",
                textDecorationLine: "underline",
                color: "blue",
                fontSize: 16,
              }}
            >
              HIDE
            </Text>
          </TouchableOpacity>
          <View style={globalStyles.row}>
            <Text>{"License Number :"}</Text>
            <Text>{vehicleInfo.LiscenseNumber}</Text>
          </View>
          <View style={globalStyles.row}>
            <Text>{"Engin Numner :"}</Text>
            <Text>{vehicleInfo.EngineNumber}</Text>
          </View>
          <View style={globalStyles.row}>
            <Text>{"Vin :"}</Text>
            <Text>{vehicleInfo.Vin}</Text>
          </View>
          <View style={globalStyles.row}>
            <Text>{"Expiry date :"}</Text>
            <Text>{vehicleInfo.ExpiryDate}</Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            height: 200,
            backgroundColor: "#f5f5f5",
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginBottom: 15,
            }}
            onPress={() => toggleModal()}
          >
            <Text
              style={{
                alignSelf: "center",
                textDecorationLine: "underline",
                color: "blue",
                fontSize: 16,
              }}
              onPress={() => toggleModal()}
            >
              {"ADDITIONAL INFO"}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={globalStyles.summaryRow}>
        <TouchableOpacity
          style={globalStyles.btnCancel}
          onPress={() => handlePdfGeneration()}
        >
          <Text style={globalStyles.innerText}>GeneratePDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.btn} onPress={() => HandleDone()}>
          <Text style={globalStyles.innerTextWhite}>DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummaryScreen;
