// Define GraphQL mutations for use within the server

import { gql } from "@apollo/client";

export const CREATE_INGREDIENT = gql`
    mutation CreateIngredient($input: NewIngredient!) {
        createIngredient(input: $input) {
            ingredientId
            name
            description
            user {
                userId
                name
            }
        }
    }
`;

export const CREATE_RECIPE = gql`
    mutation CreateRecipe($input: NewRecipe!) {
        createRecipe(input: $input) {
            recipeId
            name
            description
            user {
                userId
                name
            }
            ingredients {
                ingredientId
                name
                description
            }
        }
    }
`;
