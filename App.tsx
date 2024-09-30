import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, ApolloClientOptions, InMemoryCache, ApolloProvider } from "@apollo/client";

import ambrosiaConfig from "./ambrosia.config";

import { HomeSplash } from "./src/components/HomeSplash";
import { IngredientList } from "./src/components/IngredientList";
import { NewIngredientForm } from "./src/components/NewIngredientForm";
import { styles } from "./styles";

const client = new ApolloClient({
  uri: `${ambrosiaConfig.BACKEND_URL}/graphql`,
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <HomeSplash></HomeSplash>
        <NewIngredientForm></NewIngredientForm>
        <IngredientList></IngredientList>
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

export default App;
