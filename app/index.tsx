import { Text, View } from "react-native"; //view = like a <div> in html (a container box) || text = like a <p> in html (display text)

export default function Index() {
  return (
    <View
      style={{
        flex: 1, //flex:1 -> take up the entire screen
        justifyContent: "center", 
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
