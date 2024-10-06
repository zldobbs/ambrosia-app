// Explore section for searching and discovering new recipes

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreStackNavigatorParamList } from "./types";
import { ExploreScreen } from "../screens/ExploreScreen";
import { RecipeScreen } from "../screens/RecipeScreen";
import { screenNavigationOptions } from "./options";

const ExploreStack = createNativeStackNavigator<ExploreStackNavigatorParamList>();
export const ExploreStackScreenNavigator = () => {
    return (
        <ExploreStack.Navigator screenOptions={screenNavigationOptions} initialRouteName="ExploreScreen">
            <ExploreStack.Screen name="ExploreScreen" component={ExploreScreen} />
            <ExploreStack.Screen name="RecipeScreen" component={RecipeScreen} />
        </ExploreStack.Navigator>
    );
}
