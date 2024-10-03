// Define the types needed for working with React Native
// ref: https://reactnavigation.org/docs/typescript/

import { CompositeScreenProps } from "@react-navigation/native";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Recipe } from "../gql/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// map route : params for routes shared between multiple navigators
export type SharedStackParamList = {
    RecipeDetails: { recipe: Recipe };
};

// map route : params for ExploreStack navigator
export type ExploreStackParamList = {
    ExploreHome: undefined;
} & SharedStackParamList;

// map route : params for CookbookStack navigator
export type CookbookStackParamList = {
    CookbookHome: undefined;
    NewIngredient: undefined;
} & SharedStackParamList;

export type RootBottomTabNavigatorParamList = {
    Explore: NavigatorScreenParams<ExploreStackParamList>,
    Cookbook: NavigatorScreenParams<CookbookStackParamList>,
};

export type ExploreScreenProps = CompositeScreenProps<
    NativeStackScreenProps<ExploreStackParamList, "ExploreHome">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList, "Explore">
>;

export type CookBookScreenProps = CompositeScreenProps<
    NativeStackScreenProps<CookbookStackParamList, "CookbookHome">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList, "Cookbook">
>;

export type NewIngredientScreenProps = CompositeScreenProps<
    NativeStackScreenProps<CookbookStackParamList, "NewIngredient">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList, "Cookbook">
>;

export type RecipeScreenProps = CompositeScreenProps<
    NativeStackScreenProps<SharedStackParamList, "RecipeDetails">,
    BottomTabScreenProps<RootBottomTabNavigatorParamList>
>;

// Recommended by React Navigation
// ref: https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootBottomTabNavigatorParamList { }
    }
}
