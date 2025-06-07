import { useState } from "react";
import globalStyles from "../styles/globalStyles";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import useFirebase from "../hooks/useFirebase";

const FormScreen = ({ navigation }) => {
  const [nomeCarro, setNomeCarro] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [valorAluguel, setValorAluguel] = useState(0);
  const [dataAluguel, setDataAluguel] = useState("");
  const [loading, setLoading] = useState(false);

  const { addCar } = useFirebase();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await addCar({ nomeCliente, nomeCarro, valorAluguel, dataAluguel });
      Alert.alert("Sucesso!");
      navigation.goBack();
    } catch {
      Alert.alert("Erro ;-;");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Nome do carro"
        style={globalStyles.input}
        value={nomeCarro}
        onChangeText={setNomeCarro}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Nome do cliente"
        style={globalStyles.input}
        value={nomeCliente}
        onChangeText={setNomeCliente}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Valor do aluguel"
        style={globalStyles.input}
        value={valorAluguel}
        onChangeText={setValorAluguel}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Data do aluguel"
        style={globalStyles.input}
        value={dataAluguel}
        onChangeText={setDataAluguel}
        autoCapitalize="none"
      />
      {!loading ? (
        <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
          <Text style={globalStyles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      ) : (
        <Text>Carregando</Text>
      )}
    </View>
  );
};

export default FormScreen;
