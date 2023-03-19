import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Playing from "../screens/Playing";
import Popular from "../screens/Popular";
import TopRated from "../screens/TopRated";
import Upcoming from "../screens/Upcoming";

const TabUp = createMaterialTopTabNavigator();


const TabsUp = () =>{
    return(
        <TabUp.Navigator
            screenOptions={{
                tabBarStyle:{
                backgroundColor: "transparent",
                },
                tabBarLabelStyle:{
                    color:'#fff',
                },
                
            }}
        >
            <TabUp.Screen name="Popular" component={Popular}/>
            <TabUp.Screen name="Upcoming" component={Upcoming}/>
            <TabUp.Screen name="Top rated" component={TopRated}/>
        </TabUp.Navigator>
    )
}

export default TabsUp;