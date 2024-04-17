import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import image from "../../assets/images/beer.jpg";
import { spacing } from "../../constants/spacing";
import { colors } from "../../constants/colors";
import { Link } from "expo-router";
export default function Breweries() {
  return (
    <View style={styles.page}>
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
          <Link
            href={"/breweries"}
            style={[styles.breweryButton, styles.breweryButtonDark]}
          >
            Book a reservation
          </Link>
          <Link
            href={"/breweries"}
            style={[styles.breweryButton, styles.breweryButtonOutline]}
          >
            See the list
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 24,
  },
  breweryImage: {
    marginBottom: spacing.md,
    width: "100%",
    height: 200,
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
  },
  breweryButtonDark: {
    backgroundColor: colors.dark,
    color: colors.white,
  },
  breweryButtonOutline: {
    borderWidth: 1,
    borderColor: colors.dark,
    color: colors.dark,
  },
});
