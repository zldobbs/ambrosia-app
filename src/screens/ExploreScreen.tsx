// Default home screen

import { HomeSplash } from "../components/HomeSplash";
import { RecipeList } from "../components/RecipeList";
import { BaseScreen } from "./BaseScreen";
import { ExploreScreenProps } from "../navigation/types";

export const ExploreScreen = ({ navigation }: ExploreScreenProps) => {
    return (
        <BaseScreen>
            <HomeSplash />
            <RecipeList />
        </BaseScreen>
    );
}
