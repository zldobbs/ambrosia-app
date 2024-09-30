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
