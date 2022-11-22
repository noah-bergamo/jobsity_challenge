import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FavoritesListScreen from "../screens/favoritesListScreen";
import SeriesDetailsScreen from "../screens/seriesDetailsScreen";
import SeriesListScreen, { ISerie } from "../screens/seriesListScreen";
import SettingsScreen from "../screens/settingsScreen";
import { Colors } from "../utils/colors";

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
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Series"
        component={SeriesStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="tv"
              size={25}
              color={focused ? Colors.PRIMARY : Colors.DARK_GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesListScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="star"
              size={25}
              color={focused ? Colors.PRIMARY : Colors.DARK_GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="settings"
              size={25}
              color={focused ? Colors.PRIMARY : Colors.DARK_GREY}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
