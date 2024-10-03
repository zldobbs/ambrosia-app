// Explore section for searching and discovering new recipes

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreStackParamList } from "./types";
import { ExploreScreen } from "../screens/ExploreScreen";
import { RecipeScreen } from "../screens/RecipeScreen";
import { screenNavigationOptions } from "./options";

const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();
export const ExploreStackScreen = () => {
    return (
        <ExploreStack.Navigator screenOptions={screenNavigationOptions} initialRouteName="ExploreHome">
            <ExploreStack.Screen name="ExploreHome" component={ExploreScreen} />
            <ExploreStack.Screen name="RecipeDetails" component={RecipeScreen} />
        </ExploreStack.Navigator>
    );
}
