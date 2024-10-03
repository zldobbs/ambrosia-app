// Cookbook section for reviewing saved recipes

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CookbookScreen } from "../screens/CookbookScreen";
import { NewIngredientScreen } from "../screens/NewIngredientScreen";
import { screenNavigationOptions } from "./options";
import { CookbookStackNavigatorParamList } from "./types";
import { NewRecipeScreen } from "../screens/NewRecipeScreen";
import { RecipeScreen } from "../screens/RecipeScreen";

const CookbookStack = createNativeStackNavigator<CookbookStackNavigatorParamList>();
export const CookbookStackScreenNavigator = () => {
    return (
        <CookbookStack.Navigator screenOptions={screenNavigationOptions} initialRouteName="CookbookScreen">
            <CookbookStack.Screen name="CookbookScreen" component={CookbookScreen} />
            <CookbookStack.Screen name="RecipeScreen" component={RecipeScreen} />
            <CookbookStack.Screen name="NewRecipeScreen" component={NewRecipeScreen} />
            <CookbookStack.Screen name="NewIngredientScreen" component={NewIngredientScreen} />
        </CookbookStack.Navigator>
    );
}
