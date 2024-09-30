// Render a list of ingredients currently available

import { useQuery } from "@apollo/client";

import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { IngredientListItem } from "./IngredientListItem";
import { INGREDIENTS } from "../gql/queries";
import { FlatList, Text, View } from "react-native";

export const IngredientList = () => {
    const { loading, error, data } = useQuery(INGREDIENTS);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />;

    const { ingredients } = data;

    return (
        <View>
            <Text>Current Ingredients:</Text>
            <FlatList
                data={ingredients}
                keyExtractor={(item) => item.ingredientId.toString()}
                renderItem={({ item }) => (
                    <IngredientListItem ingredient={item} />
                )}
            />
        </View>
    );
}
