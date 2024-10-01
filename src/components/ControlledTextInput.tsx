// TextInput wrapped by react-hook-form hooks

import { Controller, FormState } from "react-hook-form"
import { Text, TextInput } from "react-native";
import { styles } from "../../styles";
import { ErrorMessage } from "./ErrorMessage";

// TODO: Need to add better input validation...
export const ControlledTextInput = ({ name, displayName, defaultValue, control, formState }: { name: string, displayName: string, defaultValue: any, control: any, formState: FormState<any> }) => {
    return (
        <>
            <Text>{displayName}</Text>
            <Controller
                name={name}
                control={control}
                rules={{ required: `${displayName} is required` }}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                    />
                )}
            />
            {formState.errors[name] && (
                <ErrorMessage message={String(formState.errors[name]?.message)} />
            )}
        </>

    );
}
