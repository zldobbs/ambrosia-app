import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ambrosiaConfig from "./ambrosia.config";

import { CookbookScreen } from "./src/screens/CookbookScreen";
import { ExploreScreen } from "./src/screens/ExploreScreen";
import { NewIngredientScreen } from "./src/screens/NewIngredientScreen";
import { Text } from "react-native";
import { styles } from "./styles";
import { RecipeScreen } from "./src/screens/RecipeScreen";
import { Recipe } from "./src/gql/types";

// GraphQL client
const client = new ApolloClient({
  uri: `${ambrosiaConfig.BACKEND_URL}/graphql`,
  cache: new InMemoryCache()
});

// We want to use a consistent navbar for all of the tabs
const screenNavigationOptions: NativeStackNavigationOptions = {
  headerTitle: "ambrosia",
  headerTitleAlign: "center",
  headerTitleStyle: styles.logo,
  headerTintColor: "#EDEBD7",
  headerStyle: styles.navBar,
  headerRight: () => (<Text style={styles.navbarItem}>Profile</Text>)
}

// FIXME: This is getting ugly
type RecipeData = {
  recipe: Recipe;
}

// FIXME: Reconsider the navigation setup
//        Will the recipe screen be able to reuse between explore/cookbook? is that okay?
export type ExploreStackParamList = {
  ExploreHome: undefined;
  ExploreRecipe: RecipeData;
}

// Explore section for searching and discovering new recipes
const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();
const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator screenOptions={screenNavigationOptions} initialRouteName="ExploreHome">
      <ExploreStack.Screen name="ExploreHome" component={ExploreScreen} />
      <ExploreStack.Screen name="ExploreRecipe" component={RecipeScreen} />
    </ExploreStack.Navigator>
  );
}

// Cookbook section for reviewing saved recipes
const CookbookStack = createNativeStackNavigator();
const CookbookStackScreen = () => {
  return (
    <CookbookStack.Navigator screenOptions={screenNavigationOptions} initialRouteName="CookbookHome">
      <CookbookStack.Screen name="CookbookHome" component={CookbookScreen} />
      <CookbookStack.Screen name="NewIngredient" component={NewIngredientScreen} />
    </CookbookStack.Navigator>
  );
}

// Tab navigator
const Tab = createBottomTabNavigator();
const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: styles.tabBar,
  tabBarActiveTintColor: "#E3B23C",
  tabBarInactiveTintColor: "#EDEBD7",
  tabBarItemStyle: { paddingBottom: 10 },
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={tabOptions} >
          <Tab.Screen name="Explore" component={ExploreStackScreen} />
          <Tab.Screen name="Cookbook" component={CookbookStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider >
  );
}

export default App;
