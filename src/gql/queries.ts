// GraphQL queries to use

import { gql } from "@apollo/client";

export const INGREDIENTS = gql`
    query Ingredients {
        ingredients {
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

export const RECIPES = gql`
    query Recipes {
        recipes {
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
                user {
                    userId
                    name
                }
            }
        }
    }
`;

export const RECIPE_BY_ID = gql`
    query RecipeById($recipeId: ID!) {
        recipeById(recipeId: $recipeId) {
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
                user {
                    userId
                    name
                }
            }
        }
    }
`;
