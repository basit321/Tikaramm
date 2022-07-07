import React, { useEffect } from "react";
import {
    View,
    Image,
    Text,
    FlatList,
    Dimensions,
    Animated,
    StyleSheet,
} from "react-native";
import { getImages } from "../Data/sliderData";

const { width, height } = Dimensions.get("window");

export default function Slider(props) {
    const Img = getImages()

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);

    const AnimatedView = ({ itm, i, opacity }) => {
        return itm ? (
            <Animated.View
                key={i}
                style={{
                    opacity,
                    height: 10,
                    width: 10,
                    backgroundColor: "#595959",
                    margin: 8,
                    borderRadius: 5,
                }}
            />
        ) : (
            <View></View>
        );
    };

    return (
        <View>
            {/* <Text>{Img}</Text> */}
            <FlatList
                data={Img}
                keyExtractor={(item, id) => "key" + id}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <View style={{ ...styles.cardView }}>
                        <Image
                            source={item.img}
                            style={{ ...styles.ImgStyle }}
                        />
                    </View>
                }}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
 
                ])}
            />
            <View style={styles.dotView}>
                {Img.map((itm, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp",
                    });
                    return <AnimatedView itm={itm} i={i} opacity={opacity} />;
                })}
            </View>
            {/* <SliderImg url={Img[3]} /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    dotView: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    cardView: {
        flex: 1,
        width: width - 40,
        height: height / 5.5,
        marginVertical: 10,
        marginLeft: 0,
        borderRadius: 10,
    },
    ImgStyle: {
        height: height / 5,
        borderRadius: 10,
        resizeMode:"contain"
    },
});