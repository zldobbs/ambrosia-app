// Render a list of ingredients currently available

import { useQuery } from "@apollo/client";

import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { IngredientListItem } from "./IngredientListItem";
import { INGREDIENTS } from "../gql/queries";
import { FlatList, Text, View } from "react-native";
import { styles } from "../../styles";
import { Ingredient } from "../gql/types";

type IngredientData = {
    ingredients: Ingredient[];
}

export const IngredientList = () => {
    const { loading, error, data } = useQuery<IngredientData>(INGREDIENTS);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />;
    if (data) {
        const { ingredients } = data;

        return (
            <View>
                <Text style={styles.h3}>Current Ingredients:</Text>
                <FlatList
                    data={ingredients}
                    keyExtractor={(item) => item.ingredientId.toString()}
                    renderItem={({ item }) => (<IngredientListItem ingredient={item} />)}
                    style={styles.list}
                />
            </View>
        );
    }

    return <Loading />;
}
