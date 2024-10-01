// TextInput wrapped by react-hook-form hooks

import { Controller, FormState, useController } from "react-hook-form"
import { Text, TextInput } from "react-native";
import { styles } from "../../styles";

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
                <Text style={{ color: 'red' }}>
                    {String(formState.errors[name]?.message)}
                </Text>
            )}
        </>

    );
}
