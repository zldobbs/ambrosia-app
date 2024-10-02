// Define GraphQL mutations for use within the server

import { gql } from "@apollo/client";

export const CREATE_INGREDIENT = gql`
    mutation CreateIngredient($input: NewIngredient!) {
        createIngredient(input: $input) {
            ingredientId
            name
            description
        }
    }
`
