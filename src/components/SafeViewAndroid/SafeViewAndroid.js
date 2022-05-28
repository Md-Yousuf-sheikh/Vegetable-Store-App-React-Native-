import { StyleSheet, Platform, StatusBar } from "react-native";
import { color, colors } from "../../theme/color";
// import { color } from "../../theme/color";

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.purple
    }
});