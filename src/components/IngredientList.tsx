// Render a list of ingredients currently available

import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

// TODO: Move me
interface User {
    userId: number,
    name: string,
}

interface Ingredient {
    ingredientId: number,
    name: string,
    description: string,
    user: User,
}

// TODO: Move me
const GET_INGREDIENTS = gql`
    query GetIngredients {
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

// const [ingredients, setIngredients] = useState<Ingredient[]>([]);

export const IngredientList = () => {
    const { loading, error, data } = useQuery(GET_INGREDIENTS);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <ul>
            {data.ingredients.map((ingredient: Ingredient) => (
                <li key={ingredient.ingredientId}>
                    <b>{ingredient.name}:</b> {ingredient.description} <i>(created by: {ingredient.user.name})</i>
                </li>
            ))}
        </ul>
    );
}
