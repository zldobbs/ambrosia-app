// Form for creating a new recipe

import { SubmitHandler, useForm } from "react-hook-form";
import { NewRecipe } from "../gql/inputs";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_RECIPE } from "../gql/mutations";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles";
import { ControlledTextInput } from "./ControlledTextInput";
import { INGREDIENTS, RECIPES } from "../gql/queries";
import { Ingredient } from "../gql/types";
import { IngredientsResponse } from "../gql/responses";
import { ControlledMultiSelect } from "./ControlledMultiSelect";
import { useNavigation } from "@react-navigation/native";

export const NewRecipeForm = () => {
    const { loading: ingredientsLoading, error: ingredientsError, data: ingredientsData } = useQuery<IngredientsResponse>(INGREDIENTS);
    const [createRecipe, { loading: createRecipeLoading, error: createRecipeError }] = useMutation(CREATE_RECIPE, { refetchQueries: [{ query: RECIPES }] });
    const { control, handleSubmit, formState } = useForm<NewRecipe>();
    const navigation = useNavigation();

    if (ingredientsLoading || createRecipeLoading) return <Loading />;
    if (ingredientsError) return <ErrorMessage message={ingredientsError.message} />
    if (createRecipeError) return <ErrorMessage message={createRecipeError.message} />
    if (ingredientsData) {
        const onSubmit: SubmitHandler<NewRecipe> = (newRecipe: NewRecipe) => {
            // Map the flat list of ingredient ids into the object expected by the mutation spec
            const transformedIngredients = newRecipe.ingredients.map((id) => ({ ingredientId: id }));
            createRecipe({ variables: { input: { ...newRecipe, ingredients: transformedIngredients } } })
                .then((res) => {
                    console.log(res);
                    // TODO: Navigating to the newly created recipe probably makes the most sense,
                    //       but in its current state that leaves the back button targetting this form, which is not good flow.
                    //       Should figure out how to override the 'back' of our redirect to target somewhere else (CookbookScreen)
                    //       For now, just navigate home instead.
                    // navigation.navigate("Cookbook", { screen: "RecipeScreen", params: { recipeId: res.data.createRecipe.recipeId } });
                    navigation.navigate("Cookbook", { screen: "CookbookScreen" })
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        return (
            <View style={styles.container}>
                <Text style={styles.h3}>Create New Recipe</Text>
                <ControlledTextInput name="name" displayName="Recipe Name" defaultValue="" control={control} formState={formState} />
                <ControlledTextInput name="description" displayName="Recipe Description" defaultValue="" control={control} formState={formState} />
                {/*
                TODO: userId should not be an input, should be read from session
                consider how this will interact with the NewIngredient mutation type, will we need an additional type here?
                */}
                <ControlledTextInput name="userId" displayName="User ID" defaultValue="" control={control} formState={formState} />

                {/*
                TODO: Should implement search capabilities here; the search itself will have to poll the backend database and not the cache.
                */}

                <View style={{ height: 200 }}>
                    <ControlledMultiSelect
                        name="ingredients"
                        displayName="Ingredients"
                        defaultValue={[]}
                        items={ingredientsData.ingredients}
                        keyExtractor={(item: Ingredient) => item.ingredientId.toString()}
                        labelExtractor={(item: Ingredient) => item.name}
                        control={control}
                        formState={formState}
                    />
                </View>

                <Text>Need a new ingredient? Create one!</Text>
                {/* TODO: Modal popup for NewIngredientForm. Stretch: add created ingredient to current list of ingredients */}
                <Pressable onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.button}>Create Recipe</Text>
                </Pressable>
            </View>
        );
    }

    return <Loading />;
}
