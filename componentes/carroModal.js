import { Modal, TouchableOpacity, View, Text, Image } from "react-native";
import { useState } from "react";

function CarroModal(props) {
  const [show, setShow] = useState(false);
  const element = props.element;
  return (
    <>
      <TouchableOpacity onPress={() => setShow(true)}>
        {props.children}
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show);
        }}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.9)" }}>
          <TouchableOpacity
            onPress={() => setShow(false)}
            style={{ alignSelf: "flex-end", marginRight: 20 }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                padding: 5,
                paddingHorizontal: 12,
                backgroundColor: "white",
                borderRadius: 25,
              }}
            >
              X
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              alignItems: "center",
              paddingVertical: 30,
              flex: 1,
            }}
          >
            <Image
              style={{ marginRight: 10, borderRadius: 10, alignSelf: "center" }}
              resizeMode={"contain"}
              source={{
                uri: element.uri,
                width: 300,
                height: 300,
              }}
            />
            <View style={{ flex: 1, padding: 20 }}>
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {element.nombre}
              </Text>
              <Text
                style={{ fontSize: 16, marginVertical: 10, color: "white" }}
              >
                $ {element.precio}
              </Text>
              <Text
                style={{ fontSize: 16, marginVertical: 10, color: "white" }}
              >
                {element.descripcion}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default CarroModal;
