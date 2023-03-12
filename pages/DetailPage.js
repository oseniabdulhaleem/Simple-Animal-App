import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar } from "react-native";
 
const DetailPage = ({ route, navigation }) => {
  let item = route.params.item;
  return (
    <ScrollView style={{ flex: 1, height:"100%", backgroundColor:"green", marginTop: StatusBar.currentHeight }} bounces={false}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={item.image}
        />
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.text}>{item.description}</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: 300,
      resizeMode: "cover"
    },
    header: {
      fontSize: 30,
      fontWeight: "bold",
      padding: 10,
      color: "white",
      textAlign: "center",
    },
    text: {
      fontSize: 15,
      padding: 10,
      color: "white"
    },
    colorBox: {
      width: 30,
      height: 30,
      borderRadius: 15,
      margin: 5
    },
    container: {
      backgroundColor: "green",
      height: "100%",
    },
    priceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }
  });
   
  export default DetailPage;