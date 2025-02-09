import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet, View, Text } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Ionicons } from '@expo/vector-icons';

function CustomHeader({ navigation, title, backgroundColor }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor, padding: 10 }}>
      <Ionicons.Button
        name="menu"
        size={25}
        color="#fff"
        backgroundColor={backgroundColor}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 24, fontFamily: 'CardoRegular'}}>{title}</Text>
    </View>
  );
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          headerShown: true,
          header: () => <CustomHeader navigation={navigation} title="Screeny" backgroundColor="#6c8c5e" />,
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "blue",
        })}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Mi Vestal',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
