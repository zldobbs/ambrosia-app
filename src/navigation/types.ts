// Define the types needed for working with React Native
// ref: https://reactnavigation.org/docs/typescript/

import { CompositeScreenProps } from "@react-navigation/native";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Recipe } from "../gql/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// map route : params for routes shared between multiple navigators
export type SharedStackParamList = {
    RecipeScreen: { recipeId: string };
};

// map route : params for ExploreStack navigator
export type ExploreStackNavigatorParamList = {
    ExploreScreen: undefined;
} & SharedStackParamList;

// map route : params for CookbookStack navigator
export type CookbookStackNavigatorParamList = {
    CookbookScreen: undefined;
    NewRecipeScreen: undefined;
    NewIngredientScreen: undefined;
} & SharedStackParamList;

export type RootBottomTabNavigatorParamList = {
    Explore: NavigatorScreenParams<ExploreStackNavigatorParamList>,
    Cookbook: NavigatorScreenParams<CookbookStackNavigatorParamList>,
};

export type ExploreScreenProps = CompositeScreenProps<
    NativeStackScreenProps<ExploreStackNavigatorParamList, "ExploreScreen">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList, "Explore">
>;

export type CookBookScreenProps = CompositeScreenProps<
    NativeStackScreenProps<CookbookStackNavigatorParamList, "CookbookScreen">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList, "Cookbook">
>;

export type NewRecipeScreenProps = CompositeScreenProps<
    NativeStackScreenProps<CookbookStackNavigatorParamList, "NewRecipeScreen">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList, "Cookbook">
>;

export type NewIngredientScreenProps = CompositeScreenProps<
    NativeStackScreenProps<CookbookStackNavigatorParamList, "NewIngredientScreen">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList, "Cookbook">
>;

export type RecipeScreenProps = CompositeScreenProps<
    NativeStackScreenProps<SharedStackParamList, "RecipeScreen">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList>
>;

// Recommended by React Navigation
// ref: https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootBottomTabNavigatorParamList { }
    }
}
