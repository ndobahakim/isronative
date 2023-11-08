const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Splashscreen from "./screens/Splashscreen";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView } from 'react-native'


const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);


const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </Provider>
  );
};
export default App;
