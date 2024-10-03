// Form for creating a new ingredient

import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";

import { NewIngredient } from "../gql/inputs"
import { CREATE_INGREDIENT } from "../gql/mutations";
import { ControlledTextInput } from "./ControlledTextInput";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles";
import { INGREDIENTS } from "../gql/queries";
import { useNavigation } from "@react-navigation/native";

export const NewIngredientForm = () => {
    const [createIngredient, { loading, error }] = useMutation(CREATE_INGREDIENT, { refetchQueries: [{ query: INGREDIENTS }] });
    const { control, handleSubmit, formState } = useForm<NewIngredient>();
    const navigation = useNavigation();

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />

    const onSubmit: SubmitHandler<NewIngredient> = (newIngredientInput: NewIngredient) => {
        createIngredient({ variables: { input: newIngredientInput } })
            .then(res => {
                console.log(res);
                // TODO: Should log some successfull message when we go back as well...
                navigation.goBack();
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <View>
            <Text style={styles.h3}>New Ingredient</Text>
            <ControlledTextInput name="name" displayName="Name" control={control} defaultValue="" formState={formState} />
            <ControlledTextInput name="description" displayName="Description" control={control} defaultValue="" formState={formState} />
            {/*
            TODO: userId should not be an input, should be read from session
            consider how this will interact with the NewIngredient mutation type, will we need an additional type here?
            */}
            <ControlledTextInput name="userId" displayName="User ID" control={control} defaultValue="" formState={formState} />

            <Pressable onPress={handleSubmit(onSubmit)}>
                <Text style={styles.button}>Create Ingredient</Text>
            </Pressable>
        </View >
    );
}
