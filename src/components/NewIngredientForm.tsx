// Form for creating a new ingredient

import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { NewIngredient } from "../gql/inputs"
import { CREATE_INGREDIENT } from "../gql/mutations";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { Button, Text, TextInput, View } from "react-native";

export const NewIngredientForm = () => {
    // TODO: What is data used for here?
    const [createIngredient, { loading, error, data }] = useMutation(CREATE_INGREDIENT);
    // TODO: What is watch and formState..?
    const { control, handleSubmit, formState: { errors } } = useForm<NewIngredient>();

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />

    const onSubmit: SubmitHandler<NewIngredient> = (newIngredientInput) => {
        createIngredient({ variables: { input: newIngredientInput } })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <View>
            <Text>Name:</Text>
            <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder="Name" onBlur={onBlur} onChangeText={onChange} value={value} />
                )}
            />
            {errors.name && (
                <Text style={{ color: 'red' }}>{errors.name.message}</Text>
            )}
            <Text>Description:</Text>
            <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder="Description" onBlur={onBlur} onChangeText={onChange} value={value} />
                )}
            />
            {errors.description && (
                <Text style={{ color: 'red' }}>{errors.description.message}</Text>
            )}
            {/*
            TODO: userId should not be an input, should be read from session
            consider how this will interact with the NewIngredient mutation type, will we need an additional type here?
            */}
            <Text>User ID:</Text>
            <Controller
                name="userId"
                control={control}
                rules={{ required: "User ID is required" }}
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder="User ID" onBlur={onBlur} onChangeText={onChange} value={value} />
                )}
            />
            {errors.userId && (
                <Text style={{ color: 'red' }}>{errors.userId.message}</Text>
            )}

            <Button title="Create Ingredient" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}
