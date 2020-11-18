import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createAppContainer } from 'react-navigation';

import Start  from './Screens/Start';
import Gender from './Screens/Gender';
import Age    from './Screens/Age';
import Goal   from './Screens/Goal';
import Fit    from './Screens/Fit';
import Height from './Screens/Height';
import Weight from './Screens/Weight';
import Pain   from './Screens/Pain';
import Home  from './Screens/Home';
import BottomNavigator from './Navigators/Bottom';


const Tab= createBottomTabNavigator();
const Stack=createStackNavigator();

function navigator(){
  return (
  <Tab.Navigator
   screenOptions={{
                headerShown: true,
                headerTransparent:true,
                position:"absolute"
                }}
                tabBar={props => <BottomNavigator {...props} />}>
   
  <Tab.Screen 
  name='Home' component={Home}
  options={{headerShown:false}}/>
  </Tab.Navigator>
  );
}

// const DrawerStack=createStackNavigator({
//   Home:{
//   screen:'Home',
//   }
// })

 function App ({navigaiton}){
return(
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen
  name='Start' component={Start}
  options={{headerTintColor:'white'}}/>
  <Stack.Screen 
  name='Gender' component={Gender}
  options={{headerTintColor:'white'}}/>
   <Stack.Screen 
  name='Age' component={Age}
  options={{headerTintColor:'white'}}/>
   <Stack.Screen 
  name='Goal' component={Goal}
  options={{headerTintColor:'white'}}/>


   <Stack.Screen 
  name='Fit' component={Fit}
  options={{headerTintColor:'white',}}/>
 <Stack.Screen 
  name='Height' component={Height}
  options={{headerTintColor:'white'}}/>
   <Stack.Screen 
  name='Weight' component={Weight}
  options={{headerTintColor:'white'}}/>
   <Stack.Screen 
  name='Pain' component={Pain}
  options={{headerTintColor:'white'}}/>
  <Stack.Screen 
  name='Home' component={navigator}
  options={{headerShown:false}}/>
    </Stack.Navigator>

  </NavigationContainer>
);
}
export default App;

  






