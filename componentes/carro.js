import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";
import CarroModal from "./carroModal";

function Carro(props) {
  const [comprado, setComprado] = useState(props.comprado);
  const element = props.element;
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        width: "90%",
        alignSelf: "center",
        height: 150,
        flexDirection: "row",
      }}
    >
      <CarroModal element={element}>
        <Image
          style={{ marginRight: 10, borderRadius: 10 }}
          resizeMode={"contain"}
          source={{
            uri: element.uri,
            width: 130,
            height: 130,
          }}
        />
      </CarroModal>
      <View style={{ paddingVertical: 3, flex: 1 }}>
        <View style={{ flex: 1 }}>
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
          <Text style={{ fontSize: 16, marginVertical: 10, color: "white" }}>
            $ {element.precio}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            style={{
              backgroundColor: comprado ? "#9b4f50" : "#4f629b",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: 100,
              alignItems: "center",
            }}
            onPress={() => {
              setComprado(!comprado);
              props.comprar(element);
            }}
          >
            <Text style={{ color: "white" }}>
              {comprado ? "Comprado" : "Comprar"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Carro;
