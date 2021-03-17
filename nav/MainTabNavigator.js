/* eslint react/prop-types: 0 */
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoScreen from "../screens/TodosScreen";
import CompletedScreen from "../screens/CompletedScreen";

// import { TabNavigator, TabBarBottom } from "react-navigation";

import Colors from "../constants/Colors";
import CONSTANTS from "../constants";
import TodosScreen from "../screens/TodosScreen";

// const commonNavigationOptions = ({ navigation }) => ({
//   header: null,
//   title: navigation.state.routeName,
// });

// const routeOptions = {
//   screen: TodosScreen,
//   navigationOptions: commonNavigationOptions,
// };

// different routes for all, active and completed todos
// const TabNav = TabNavigator(
//   {
//     [CONSTANTS.ALL]: routeOptions,
//     [CONSTANTS.ACTIVE]: routeOptions,
//     [CONSTANTS.COMPLETED]: routeOptions,
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         switch (routeName) {
//           case CONSTANTS.ALL:
//             iconName = "format-list-bulleted";
//             break;
//           case CONSTANTS.ACTIVE:
//             iconName = "filter-center-focus";
//             break;
//           case CONSTANTS.COMPLETED:
//             iconName = "playlist-add-check";
//         }
//         return (
//           <MaterialIcons
//             name={iconName}
//             size={28}
//             style={{ marginBottom: -3 }}
//             color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//           />
//         );
//       },
//     }),
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: "bottom",
//     animationEnabled: true,
//     swipeEnabled: true,
//   }
// );

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "format-list-bulleted";
          } else if (route.name === "Completed") {
            iconName = "playlist-add-check";
          }

          // You can return any component that you like here!
          return (
            <MaterialIcons
              name={iconName}
              size={28}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={TodoScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
    </Tab.Navigator>
  );
}

export default TabNav;
