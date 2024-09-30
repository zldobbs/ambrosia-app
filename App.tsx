import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, ApolloClientOptions, InMemoryCache, ApolloProvider } from "@apollo/client";

import ambrosiaConfig from "./ambrosia.config";

import { HomeSplash } from "./src/components/HomeSplash";
import { IngredientList } from "./src/components/IngredientList";

const client = new ApolloClient({
  uri: `${ambrosiaConfig.BACKEND_URL}/graphql`,
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <HomeSplash></HomeSplash>
        <IngredientList></IngredientList>
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
