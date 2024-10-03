// Cookbook section for reviewing saved recipes

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CookbookScreen } from "../screens/CookbookScreen";
import { NewIngredientScreen } from "../screens/NewIngredientScreen";
import { screenNavigationOptions } from "./options";
import { CookbookStackParamList } from "./types";

const CookbookStack = createNativeStackNavigator<CookbookStackParamList>();
export const CookbookStackScreen = () => {
    return (
        <CookbookStack.Navigator screenOptions={screenNavigationOptions} initialRouteName="CookbookHome">
            <CookbookStack.Screen name="CookbookHome" component={CookbookScreen} />
            <CookbookStack.Screen name="NewIngredient" component={NewIngredientScreen} />
        </CookbookStack.Navigator>
    );
}
