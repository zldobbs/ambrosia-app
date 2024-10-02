// Default home screen

import { HomeSplash } from "../components/HomeSplash";
import { BaseScreen } from "./BaseScreen";

export const ExploreScreen = () => {
    return (
        <BaseScreen>
            <HomeSplash />
        </BaseScreen>
    );
}
