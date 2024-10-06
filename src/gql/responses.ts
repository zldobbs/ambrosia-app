import { Ingredient, Recipe } from "./types";

export type GraphQLErrorMessage = {
    message: string;
    path: string[];
};

export type ErrorResponse = {
    errors: GraphQLErrorMessage[];
};

export type IngredientsResponse = {
    ingredients: Ingredient[];
};

export type RecipeByIdResponse = {
    recipeById: Recipe;
};
