import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesListScreen from "../screens/favoritesListScreen";
import SeriesDetailsScreen from "../screens/seriesDetailsScreen";
import SeriesListScreen, { ISerie } from "../screens/seriesListScreen";
import SettingsScreen from "../screens/settingsScreen";

export type RootBottomTabParamList = {
  Series: undefined;
  Favorites: undefined;
  Settings: undefined;
};
export type SeriesStackParamList = {
  SeriesList: undefined;
  SerieDetails: { serieData: ISerie };
};
const Tab = createBottomTabNavigator<RootBottomTabParamList>();
const Stack = createNativeStackNavigator<SeriesStackParamList>();

const SeriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SeriesList"
        component={SeriesListScreen}
        options={{ title: "TV Series" }}
      />
      <Stack.Screen name="SerieDetails" component={SeriesDetailsScreen} />
    </Stack.Navigator>
  );
};

export default function HomeStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Series" component={SeriesStack} />
      <Tab.Screen name="Favorites" component={FavoritesListScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
