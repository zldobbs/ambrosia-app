// Fragments for use in GraphQL queries

export type NewIngredient = {
    name: string;
    description: string;
    userId: string;
};

export type ExistingIngredientId = {
    ingredientId: string;
};

export type NewRecipe = {
    name: string;
    description: string;
    ingredients: ExistingIngredientId[];
    userId: string;
};
