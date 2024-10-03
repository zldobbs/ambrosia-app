// Default home screen

import { HomeSplash } from "../components/HomeSplash";
import { RecipeList } from "../components/RecipeList";
import { BaseScreen } from "./BaseScreen";
import { ExploreScreenProps } from "../navigation/types";
import { View } from "react-native";

export const ExploreScreen = ({ navigation }: ExploreScreenProps) => {
    return (
        <BaseScreen>
            <View style={{ flex: 1 }}>
                <HomeSplash />
            </View>
            <View style={{ flex: 9 }}>
                <RecipeList />
            </View>
        </BaseScreen>
    );
}
