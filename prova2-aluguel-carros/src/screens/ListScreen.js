import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import useFirebase from "../hooks/useFirebase";
import globalStyles from "../styles/globalStyles";
import FloatButton from "../components/ui/buttons/FloatButton.js";
import { useFocusEffect } from "@react-navigation/native";

export default function ListScreen({ navigation }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState([]);
  const { fetchCars, deleteCar } = useFirebase();

  const fetchData = async () => {
    setLoading(true);
    try {
      const carros = await fetchCars();
      setCars(carros);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  const handleDelete = async (id) => {
    try {
      await deleteCar(id);
      setCars((u) => u.filter((x) => x.id !== id));
      Alert.alert("Sucesso", "Carro excluído");
    } catch {
      Alert.alert("Erro", "Não foi possível excluir");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemLabel}>Nome do carro:</Text>
        <Text>{item.nomeCarro}</Text>
      </View>
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemLabel}>Nome do cliente:</Text>
        <Text>{item.nomeCliente}</Text>
      </View>
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemLabel}>Valor do aluguel:</Text>
        <Text>{item.valorAluguel}</Text>
      </View>
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemLabel}>Data do Aluguel:</Text>
        <Text>{item.dataAluguel}</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FA8072",
            borderRadius: 10,
            width: 100,
          }}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={{ margin: 10, alignSelf: "center", fontWeight: "bold" }}>
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View
        style={[
          globalStyles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Text>Carregando</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Lista de Carros</Text>
      <FlatList
        data={cars}
        keyExtractor={(x) => x.id}
        renderItem={renderItem}
        ItemSeparatorComponent={<View style={{ margin: 5 }} />}
      />
      <FloatButton
        onPress={() => {
          navigation.navigate("Form");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#D3D3D3",
    padding: 15,
    borderRadius: 15,
  },
  listItemContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  listItemLabel: {
    fontWeight: "bold",
  },
});
