import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/screens/LoginScreen" />;
}

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1, //flex:1 -> take up the entire screen
//         justifyContent: "center", 
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screenss.</Text>
//     </View>
//   );
// }
