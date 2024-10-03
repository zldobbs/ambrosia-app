// Controlled multi select input

import { Controller, FormState } from "react-hook-form";
import { MultiSelect } from "./MultiSelect";
import { ErrorMessage } from "./ErrorMessage";
import { Text } from "react-native";

type ControlledMultiSelectProps = {
    name: string;
    displayName: string;
    defaultValue: any[];
    control: any;
    formState: FormState<any>;
    items: any[];
    keyExtractor: Function;
    labelExtractor: Function;
};

// TODO: Needs better input validation (currently doesn't require anything..)
export const ControlledMultiSelect = ({ name, displayName, defaultValue, control, formState, items, keyExtractor, labelExtractor }: ControlledMultiSelectProps) => {
    return (
        <>
            <Text>{displayName}</Text>
            <Controller
                name={name}
                defaultValue={defaultValue}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <MultiSelect
                        items={items}
                        selectedItems={value}
                        keyExtractor={keyExtractor}
                        labelExtractor={labelExtractor}
                        onChange={onChange} />
                )}
            />
            {formState.errors[name] && (
                <ErrorMessage message={String(formState.errors[name]?.message)} />
            )}
        </>
    );
}
