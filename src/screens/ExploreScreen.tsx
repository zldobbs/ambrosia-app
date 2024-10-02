// Default home screen

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeSplash } from "../components/HomeSplash";
import { RecipeList } from "../components/RecipeList";
import { BaseScreen } from "./BaseScreen";
import { ParamListBase } from "@react-navigation/native";

type ExploreScreenProps = {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export const ExploreScreen = ({ navigation }: ExploreScreenProps) => {
    return (
        <BaseScreen>
            <HomeSplash />
            {/* FIXME: Should try to avoid passing navigation this deeply if we can... */}
            <RecipeList navigation={navigation} />
        </BaseScreen>
    );
}
