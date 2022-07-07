import { HStack } from 'native-base';
import * as React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { List } from 'react-native-paper';
import { ColorTick, Oval, Pixxa } from './Images';

const FoodMenu = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section>
            <List.Accordion
                title="the most wanted"
                expanded={expanded}
                onPress={handlePress}
            >
                <ScrollView style={{ margin: 10, backgroundColor: "#fff", borderRadius: 20, ...styles.foodMenu }}>
                    <HStack alignItems="center" p='2' style={{ borderBottomWidth: 1, borderColor: "#BDC0C8" }}>
                        <Pixxa />
                        <View style={{ marginLeft: 10, width: "70%" }}>
                            <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>Food Name</Text>
                            <Text style={{ fontSize: 14, color: "#898989", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>the ingredients</Text>
                            <Text style={{ fontSize: 14, color: "#00A27F", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>2.30 JD</Text>
                        </View>
                        <View style={{ alignSelf: "flex-start" }}>
                            <Oval />
                        </View>
                    </HStack>
                    <HStack alignItems="center" p='2' style={{ borderBottomWidth: 1, borderColor: "#BDC0C8" }}>
                        <Pixxa />
                        <View style={{ marginLeft: 10, width: "70%" }}>
                            <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>Food Name</Text>
                            <Text style={{ fontSize: 14, color: "#898989", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>the ingredients</Text>
                            <Text style={{ fontSize: 14, color: "#00A27F", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>2.30 JD</Text>
                        </View>
                        <View style={{ alignSelf: "flex-start" }}>
                            <ColorTick />
                        </View>
                    </HStack>
                    <HStack alignItems="center" p="2">
                        <Pixxa />
                        <View style={{ marginLeft: 10, width: "70%" }}>
                            <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>Food Name</Text>
                            <Text style={{ fontSize: 14, color: "#898989", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>the ingredients</Text>
                            <Text style={{ fontSize: 14, color: "#00A27F", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>2.30 JD</Text>
                        </View>
                        <View style={{ alignSelf: "flex-start" }}>
                            <Oval />
                        </View>
                    </HStack>
                </ScrollView>
            </List.Accordion>

            <List.Accordion title="Sandwiches">
            </List.Accordion>

            <List.Accordion title="Meals">
            </List.Accordion>
        </List.Section >
    );
};

export default FoodMenu;

const styles = StyleSheet.create({
    foodMenu: {

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }

})
