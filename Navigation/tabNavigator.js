import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import StackNavigator from "./stackNavigator";

const tab = createBottomTabNavigator();

const  TabNavigator = () =>{
    return (
            <tab.Navigator>
                <tab.Screen name = 'HomeTab' component = {StackNavigator}   options={{ headerShown: false }} // ✅ This hides the Tab header permanently
/>
                <tab.Screen name = 'Profile' component = {ProfileScreen}   options={{ headerShown: false }} // ✅ This hides the Tab header permanently
/>
            </tab.Navigator>
            

    )
}

export default TabNavigator;