import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
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
      <ScrollView style={styles.scrollContainer}>
        <HomeSplash></HomeSplash>
        <NewIngredientForm></NewIngredientForm>
        <IngredientList></IngredientList>
        <StatusBar style="auto" />
      </ScrollView>
    </ApolloProvider>
  );
}

export default App;
