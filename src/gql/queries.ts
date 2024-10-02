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
`

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
`
