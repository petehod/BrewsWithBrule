import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { BeerMug } from "../Icons/BeerMug";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
export const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      <Link href={""}>
        <View style={styles.menuItemWrapper}>
          <BeerMug height={16} width={16} fill={colors.dark} />
          <Text style={styles.menuItemText}>Home</Text>
        </View>
      </Link>
      <Link href={"/breweries"} style={styles.menuItemWrapper}>
        <View style={styles.menuItemWrapper}>
          <BeerMug height={16} width={16} fill={colors.dark} />
          <Text style={styles.menuItemText}>Breweries</Text>
        </View>
      </Link>

      <Link href={"/post"} style={styles.menuItemWrapper}>
        <View style={styles.menuItemWrapper}>
          <BeerMug height={16} width={16} fill={colors.dark} />
          <Text style={styles.menuItemText}>Post</Text>
        </View>
      </Link>
      <Link href={"/profile"} style={styles.menuItemWrapper}>
        <View style={styles.menuItemWrapper}>
          <BeerMug height={16} width={16} fill={colors.dark} />
          <Text style={styles.menuItemText}>Profile</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menuItemWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  menuItemText: {
    marginTop: spacing.xs,
    fontSize: 16,
  },
});
