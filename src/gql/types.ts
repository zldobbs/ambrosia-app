// Define interfaces mapping to expected GraphQL types

export type User = {
    userId: number;
    name: string;
}

export type Ingredient = {
    ingredientId: number;
    name: string;
    description: string;
    user: User;
}