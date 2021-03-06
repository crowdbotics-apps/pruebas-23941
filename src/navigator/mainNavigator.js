import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps194681Navigator from '../features/Maps194681/navigator';
import Additem194680Navigator from '../features/Additem194680/navigator';
import Maps194676Navigator from '../features/Maps194676/navigator';
import UserProfile194672Navigator from '../features/UserProfile194672/navigator';
import UserProfile194640Navigator from '../features/UserProfile194640/navigator';
import Tutorial194639Navigator from '../features/Tutorial194639/navigator';
import NotificationList194611Navigator from '../features/NotificationList194611/navigator';
import Settings194610Navigator from '../features/Settings194610/navigator';
import Settings194602Navigator from '../features/Settings194602/navigator';
import UserProfile194600Navigator from '../features/UserProfile194600/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps194681: { screen: Maps194681Navigator },
Additem194680: { screen: Additem194680Navigator },
Maps194676: { screen: Maps194676Navigator },
UserProfile194672: { screen: UserProfile194672Navigator },
UserProfile194640: { screen: UserProfile194640Navigator },
Tutorial194639: { screen: Tutorial194639Navigator },
NotificationList194611: { screen: NotificationList194611Navigator },
Settings194610: { screen: Settings194610Navigator },
Settings194602: { screen: Settings194602Navigator },
UserProfile194600: { screen: UserProfile194600Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
