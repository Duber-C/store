import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useState } from "react";
import Carro from "./componentes/carro";

export default function App() {
  const cars = [
    {
      nombre: "nombre carro",
      precio: "18.000",
      uri: "https://picsum.photos/300/300",
      descripcion: "el carro mas rapido del mundo",
    },
    {
      nombre: "nombre carro",
      precio: "50.000",
      uri: "https://picsum.photos/400/401",
      descripcion: "el carro mas rapido del mundo",
    },
    {
      nombre: "nombre carro",
      precio: "18.000",
      uri: "https://picsum.photos/300/302",
      descripcion: "el carro mas rapido del mundo",
    },
    {
      nombre: "nombre carro",
      precio: "50.000",
      uri: "https://picsum.photos/400/403",
      descripcion: "el carro mas rapido del mundo",
    },
    {
      nombre: "nombre carro",
      precio: "18.000",
      uri: "https://picsum.photos/300/304",
      descripcion: "el carro mas rapido del mundo",
    },
    {
      nombre: "nombre carro",
      precio: "50.000",
      uri: "https://picsum.photos/400/405",
      descripcion: "el carro mas rapido del mundo",
    },
  ];

  const [c, setC] = useState({});
  let comprados = [];

  const comprar = (carro) => {
    if (!comprados.includes(carro)) {
      comprados.push(carro);
    } else {
      let ind = comprados.indexOf(carro);
      comprados.splice(ind, 1);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: "white",
            padding: 20,
            margin: 50,
            fontSize: 22,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Tienda de carros
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        {cars.map((element, index) => (
          <Carro
            element={element}
            comprado={comprados.includes(element)}
            comprar={comprar}
            key={index}
            index={index}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#383838",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: "90%",
    alignSelf: "center",
    height: 150,
    flexDirection: "row",
  },
});
