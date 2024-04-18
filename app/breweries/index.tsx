import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import image from "../../assets/images/beer.jpg";
import { spacing } from "../../constants/spacing";
import { colors } from "../../constants/colors";
import { Link } from "expo-router";
export default function Breweries() {
  return (
    <ScrollView style={styles.page}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.breweryImage}
      />
      <Text style={styles.breweryTitle}>3rd Act Brewery</Text>
      <Text style={styles.breweryDescription}>
        3rd Act Brewery, located in Woodbury, MN, is a family-owned and operated
        brewery that specializes in crafting unique and flavorful beers.
      </Text>
      <View style={styles.breweryDataOustideWrapper}>
        <View style={styles.row}>
          <View style={styles.breweryDataWrapper}>
            <Text style={styles.breweryDataAnswer}>$$</Text>
            <Text style={styles.breweryDataTopic}>Price ranges</Text>
          </View>
          <View style={styles.breweryDataWrapper}>
            <Text style={styles.breweryDataAnswer}>Beers on tap</Text>
            <Text style={styles.breweryDataTopic}>20+ Original beers</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.breweryDataWrapper}>
            <Text style={styles.breweryDataAnswer}>10am - 10pm</Text>
            <Text style={styles.breweryDataTopic}>Open from</Text>
          </View>
          <View style={styles.breweryDataWrapper}>
            <Text style={styles.breweryDataAnswer}>GF, Keto</Text>
            <Text style={styles.breweryDataTopic}>Options available</Text>
          </View>
        </View>

        <View style={styles.breweryDataWrapperFullWidth}>
          <Text
            style={[styles.breweryDataAnswer, styles.breweryDataAnswerStar]}
          >
            *****
          </Text>
          <Text style={styles.breweryDataTopic}>Rating</Text>
        </View>

        <View style={styles.breweryButtonWrapper}>
          <TouchableOpacity
            style={[styles.breweryButton, styles.breweryButtonDark]}
          >
            <Text style={{ color: colors.white, fontWeight: "600" }}>
              Book a reservation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.breweryButton, styles.breweryButtonOutline]}
          >
            <Text style={{ color: colors.dark, fontWeight: "600" }}>
              See the list
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={{ uri: "https://www.gm-maps.com/osm_tiles/13/2137/3221.png" }}
        style={styles.breweryMapImage}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 24,
    minHeight: "100%",
  },
  breweryImage: {
    marginBottom: spacing.md,
    width: "100%",
    height: 200,
  },
  breweryMapImage: {
    width: "100%",
    height: 400,
    marginTop: spacing.xl,
  },
  breweryTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: spacing.sm,
  },
  breweryDescription: {
    fontSize: 16,
    marginBottom: spacing.lg,
  },
  breweryDataOustideWrapper: {
    display: "flex",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: spacing.lg,
  },
  breweryDataWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "50%",
  },
  breweryDataWrapperFullWidth: {
    display: "flex",
    flexDirection: "column",
  },
  breweryDataAnswer: {
    fontSize: 18,
    fontWeight: "700",
  },
  breweryDataAnswerStar: {
    color: colors.primary,
  },
  breweryDataTopic: {
    color: colors.medium,
    fontSize: 16,
  },
  breweryButtonWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginVertical: spacing.xxl,
  },
  breweryButton: {
    height: 40,
    fontSize: 18,
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    width: "50%",
    flex: 1,
  },
  breweryButtonDark: {
    backgroundColor: colors.dark,
  },
  breweryButtonOutline: {
    borderWidth: 1,
    borderColor: colors.dark,
  },
});
