
interface Screens {
    home: undefined;
    details: undefined;
    newMeal: undefined;
    allowedMeal: undefined;
    notAllowedMeal: undefined;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList extends Screens {}
    }
}