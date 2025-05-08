import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Text, View } from "react-native";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ paddingVertical: 30, marginLeft: 20}}>
        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Reg', color: 'white' }}>
          Gerlyn Tan | Portfolio
        </Text>
      </View>

      <View style={{ flex: 1, paddingTop: 10 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
