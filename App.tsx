/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/navigation/homeStack";
import { FavoriteProvider } from "./src/contexts/FavoriteContext";

const App = () => {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </FavoriteProvider>
  );
};

export default App;
