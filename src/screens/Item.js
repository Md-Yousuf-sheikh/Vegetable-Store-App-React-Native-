import React from 'react';
import { View, Pressable, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import SafeViewAndroid from '../components/SafeViewAndroid/SafeViewAndroid'
import Text from '../components/Text/Text';
import { colors } from '../theme/color';
import { spacing } from '../theme/spacing';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native-web';
import { useState } from 'react';

//  data import
const image = [
    'https://i.ibb.co/HHKqd4P/Media.png',
    'https://cdn.pixabay.com/photo/2015/05/20/18/35/salad-775949__340.jpg',
    'https://cdn.pixabay.com/photo/2018/06/19/10/16/lollo-rosso-3484159__340.jpg',
]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


// https://i.ibb.co/HHKqd4P/Media.png
function Item() {
    const [imgActive, setimgActive] = useState(0)
    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }
    return (
        <View style={[SafeViewAndroid.AndroidSafeArea, { flexDirection: 'column', justifyContent: 'space-between' }]}>
            {/* item slider images */}
            <View>
                <SafeAreaView style={styles.container}>
                    <View style={styles.wrap}>
                        <ScrollView
                            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            horizontal
                            style={styles.wrap}
                        >
                            {
                                image.map((e, index) =>
                                    <Image key={index}
                                        resizeMode='stretch'
                                        source={{ uri: e, width: 360, height: 260 }}
                                    />
                                )
                            }
                        </ScrollView>
                        {/* dot */}
                        <View style={styles.wrapDot}>
                            {
                                image.map((e, index) =>
                                    <Text
                                        key={e}
                                        style={imgActive == index ? styles.dotActive : styles.dot}
                                    >
                                        ●
                                    </Text>
                                )
                            }
                        </View>
                    </View>
                </SafeAreaView>
            </View>
            {/* Item Details */}
            <View style={styles.itemMainSection}>
                <Text preset='h2' style={styles.itemTitle}>Boston Lettuce</Text>
                <View style={styles.itemPriceSection}>
                    <Text preset='h2' style={styles.itemPrice}>1.10</Text>
                    <Text preset='h3' style={styles.itemPriceTitle}>€ / piece</Text>
                </View>
                <Text preset='h4' style={styles.itemPriceGr}>~ 150 gr / piece</Text>

                <Text preset='h4' style={styles.itemInfoTitle}>Spain</Text>
                <Text style={styles.itemInfo}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
                <View style={styles.buttonSection}>
                    <Pressable style={styles.favoriteBtn}>
                        <MaterialCommunityIcons name="heart-outline" size={24} style={{ color: colors.gray, }} />
                    </Pressable>
                    <Pressable style={styles.addToCartBtn}>
                        <MaterialCommunityIcons name="cart-outline" size={24} style={{ color: colors.white, }} />
                        <Text style={{ textTransform: 'uppercase', color: colors.white, paddingLeft: 5 }}>add to cart</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Item;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrap: {
        width: "100%",
        height: 260,
        backgroundColor: "#8C3"
    },
    wrapDot: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        alignSelf: 'center',

    }
    ,
    dotActive: {
        marginTop: 5,
        color: colors.white,
        marginRight: 4,
        marginRight: 4
    },
    dot: {
        marginTop: 5,

        color: colors.gray,
        marginRight: 4,
        marginRight: 4
    }
    ,
    itemMainSection: {
        backgroundColor: colors.darkGray,
        borderTopLeftRadius: spacing[8],
        borderTopRightRadius: spacing[8],
        justifyContent: 'center',
        bottom: 0,
        left: 0,
        paddingHorizontal: spacing[4],
        paddingBottom: spacing[6],
        paddingTop: spacing[8]
    },
    itemTitle: {

    },
    itemPriceSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing[4]
    },
    itemPrice: {
        marginRight: 5
    },
    itemPriceTitle: {
        color: colors.gray
    },
    itemPriceGr: {
        color: colors.lightGreen
    },
    itemInfoTitle: {
        paddingVertical: spacing[2],
        fontWeight: '800'
    },
    itemInfo: {
        color: colors.gray,
        paddingVertical: spacing[2],
        lineHeight: 24
    },
    buttonSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing[8]
    },
    favoriteBtn: {
        width: "20%",
        borderRadius: spacing[4],
        marginLeft: spacing[2],
        paddingVertical: spacing[4],
        alignItems: 'center',
        borderColor: colors.gray,
        borderWidth: 2,
        backgroundColor: colors.white,
    },
    addToCartBtn: {
        backgroundColor: colors.green,
        borderRadius: spacing[4],
        marginLeft: spacing[2],
        paddingVertical: spacing[4],
        width: "80%",
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.green,
        borderWidth: 2,
        marginLeft: 5
    }
})