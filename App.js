import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const RootStack = createStackNavigator()
const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const OrdersStack = createStackNavigator()
const DialogsStack = createStackNavigator()

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={View}/>
    </HomeStack.Navigator>
  )
}

const Orders = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name='Orders' component={View}/>
    </OrdersStack.Navigator>
  )
}

const Dialogs = () => {
  return (
    <DialogsStack.Navigator>
      <DialogsStack.Screen name='Dialogs' component={View}/>
    </DialogsStack.Navigator>
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Orders'>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Orders' component={Orders}/>
      <Tab.Screen name='Dialogs' component={Dialogs}/>
    </Tab.Navigator>
  )
}


const App = (props) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        { props.isAuthenticated ? (
            <>
              <RootStack.Screen name='Auth' component={View} options={{ headerShown: false }}/>
            </>
          ) : (
            <RootStack.Screen name='Tabs' component={BottomTabs} options={{ headerShown: false }}/>
          )
        }
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App;
