import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";

import ambrosiaConfig from "./ambrosia.config";

import { RootBottomTabNavigator } from "./src/navigation/RootBottomTabNavigator";

// GraphQL client
const client = new ApolloClient({
  uri: `${ambrosiaConfig.BACKEND_URL}/graphql`,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootBottomTabNavigator />
      </NavigationContainer>
    </ApolloProvider >
  );
}

export default App;
