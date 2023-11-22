import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";

const MainScreen = () => {
  const auth = getAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>MainScreen</Text>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
            <Text style={styles.logOutText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logOutButton: {
    marginLeft: 40,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 30,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    shadowColor: "#000000",
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  logOutText: {
    color: "white",
    fontSize: 18,
  },
});
