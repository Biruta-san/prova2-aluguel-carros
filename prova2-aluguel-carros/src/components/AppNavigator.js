import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FormScreen from "../screens/FormScreen";
import ListScreen from "../screens/ListScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"Register"} component={RegisterScreen} />
      <Stack.Screen name={"List"} component={ListScreen} />
      <Stack.Screen name={"Form"} component={FormScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
