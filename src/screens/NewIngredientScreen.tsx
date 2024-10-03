// Screen to create a new ingredient

import { NewIngredientForm } from "../components/NewIngredientForm";
import { BaseScreen } from "./BaseScreen";
import { NewIngredientScreenProps } from "../navigation/types";

export const NewIngredientScreen = ({ navigation }: NewIngredientScreenProps) => {
    return (
        <BaseScreen>
            <NewIngredientForm />
        </BaseScreen>
    );
}
