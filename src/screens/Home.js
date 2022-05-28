import { View, StyleSheet, Pressable } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid/SafeViewAndroid'
import Text from '../components/Text/Text';
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';
import { useNavigation } from '@react-navigation/native'

function App() {
    const navigation = useNavigation();
    return (
        <View style={[SafeViewAndroid.AndroidSafeArea, { backgroundColor: colors.purple }]}>
            <View styles={styles.container}>
                <View style={{ paddingTop: spacing[2] }}>
                    <View style={styles.userLogo}>
                        {/* logo */}
                        <Svg
                            width={108}
                            height={113}
                            fill="none"
                        >
                            <G filter="url(#a)">
                                <Circle cx={51.5} cy={52.5} r={31.5} fill="#CDFFB6" />
                            </G>
                            <G filter="url(#b)">
                                <Path
                                    d="M47.701 65.15c-1.16 0-2.47-.1-3.93-.3-.8-.1-1.35-.31-1.65-.63-.3-.32-.43-.84-.39-1.56.14-1.98.47-4.42.99-7.32.52-2.92 1.15-5.73 1.89-8.43.14-.5.42-.85.84-1.05.42-.2.97-.3 1.65-.3 1.22 0 1.83.34 1.83 1.02 0 .28-.06.6-.18.96-.52 1.6-1.04 3.75-1.56 6.45-.52 2.68-.89 5.24-1.11 7.68.6.06 1.28.09 2.04.09 3.5 0 6.11-1.06 7.83-3.18 1.74-2.12 2.61-4.95 2.61-8.49 0-2.38-.68-4.22-2.04-5.52-1.36-1.3-3.28-1.95-5.76-1.95-1.6 0-3.19.25-4.77.75-1.56.5-2.97 1.16-4.23 1.98-.26.18-.54.27-.84.27-.34 0-.61-.14-.81-.42-.2-.3-.3-.66-.3-1.08 0-.48.08-.87.24-1.17.16-.32.43-.61.81-.87 1.38-.94 3-1.65 4.86-2.13 1.86-.5 3.65-.75 5.37-.75 2.44 0 4.55.43 6.33 1.29 1.78.84 3.15 2.08 4.11 3.72.96 1.64 1.44 3.62 1.44 5.94 0 3.02-.6 5.66-1.8 7.92-1.2 2.24-2.95 3.98-5.25 5.22-2.3 1.24-5.04 1.86-8.22 1.86Z"
                                    fill="#8C33FF"
                                />
                            </G>
                            <Defs></Defs>
                        </Svg>
                    </View>
                </View>
                <View style={styles.splashScreen}>
                    {/* splashImage */}
                    <View style={styles.splashImage}>
                        <Svg
                            width={36}
                            height={40}
                            fill="none"
                        >
                            <Path
                                d="m21.22 20.315-1.793 1.038V40l16.142-9.32V12.034L21.22 20.315ZM24.141 3.593 17.934 0 1.344 9.577 7.56 13.17l16.581-9.577ZM34.515 9.577 27.36 5.502l-16.58 9.577.945.49 6.208 3.585 6.174-3.56 10.407-6.017ZM9.527 21.934l-2.97-1.527V15.66L.431 12.133v18.514L16.456 39.9V21.386l-6.929-3.992v4.54Z"
                                fill="#2D0C57"
                            />
                        </Svg>
                    </View>
                    <Text preset='h1' style={styles.splashtitle}>Non-Contact Deliveries</Text>
                    <Text preset='h4' style={styles.splashInfo} >
                        When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                    </Text>

                    <Pressable onPress={() => {
                        navigation.navigate('Item');
                    }}
                        style={styles.orderNowBtn}>
                        <Text style={styles.btnText}>order now</Text>
                    </Pressable>
                    <Pressable style={styles.dismissBtn}>
                        <Text style={[styles.btnText, { color: colors.gray }]}>dismiss</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        paddingTop: spacing[4],
        paddingHorizontal: spacing[4],
        position: 'relative'
    },
    userLogo: {
        width: 200,
        height: 200
    },
    // Splash Screen
    splashScreen: {
        backgroundColor: colors.darkGray,
        borderTopLeftRadius: spacing[8],
        borderTopRightRadius: spacing[8],
        justifyContent: 'center',
        bottom: -60,
        left: 0,
        paddingHorizontal: spacing[4],
        paddingBottom: spacing[6],
        paddingTop: spacing[8]
    },
    splashtitle: {
        textAlign: 'center',
        paddingVertical: spacing[4]
    },
    splashInfo: {
        textAlign: 'center',
        paddingVertical: spacing[4],
        color: colors.gray,

    },
    splashImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        alignContent: 'center',
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '36%',
        marginVertical: spacing[4]
    },
    orderNowBtn: {
        backgroundColor: colors.green,
        paddingVertical: spacing[4],
        alignItems: 'center',
        paddingHorizontal: spacing[2],
        borderRadius: spacing[2],
        marginTop: spacing[4],
        color: colors.white,
    },
    dismissBtn: {
        backgroundColor: colors.white,
        paddingVertical: spacing[4],
        alignItems: 'center',
        paddingHorizontal: spacing[2],
        borderRadius: spacing[2],
        marginVertical: spacing[4],
    },
    btnText: {
        color: colors.white,
        textTransform: 'uppercase'
    },
})