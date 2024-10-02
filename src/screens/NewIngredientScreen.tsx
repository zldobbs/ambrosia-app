// Default home screen

import { NewIngredientForm } from "../components/NewIngredientForm";
import { BaseScreen } from "./BaseScreen";

export const NewIngredientScreen = () => {
    return (
        <BaseScreen>
            <NewIngredientForm />
        </BaseScreen>
    );
}
