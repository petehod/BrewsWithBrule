import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { BeerMug } from "../Icons/BeerMug";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import { useCallback, useState } from "react";
export const Menu = () => {
  const [active, setActive] = useState("home");

  const handleActive = useCallback((name: string) => {
    setActive(name);
  }, []);
  return (
    <View style={styles.menuContainer}>
      <Link
        href={""}
        onPress={handleActive.bind(null, "home")}
        style={[styles.menuItemWrapper]}
      >
        <View style={[styles.menuItemWrapper]}>
          <View
            style={[
              styles.menuItemIconWrapper,
              active === "home" && styles.menuItemIconWrapperActive,
            ]}
          >
            <BeerMug
              height={16}
              width={16}
              fill={active === "home" ? colors.white : colors.medium}
            />
          </View>

          <Text
            style={[
              styles.menuItemText,
              active === "home" && styles.menuItemTextActive,
            ]}
          >
            Home
          </Text>
        </View>
      </Link>
      <Link
        href={"breweries"}
        onPress={handleActive.bind(null, "breweries")}
        style={[styles.menuItemWrapper]}
      >
        <View style={[styles.menuItemWrapper]}>
          <View
            style={[
              styles.menuItemIconWrapper,
              active === "breweries" && styles.menuItemIconWrapperActive,
            ]}
          >
            <BeerMug
              height={16}
              width={16}
              fill={active === "breweries" ? colors.white : colors.medium}
            />
          </View>

          <Text
            style={[
              styles.menuItemText,
              active === "breweries" && styles.menuItemTextActive,
            ]}
          >
            Breweries
          </Text>
        </View>
      </Link>

      <Link
        href={"post"}
        onPress={handleActive.bind(null, "post")}
        style={[styles.menuItemWrapper]}
      >
        <View style={[styles.menuItemWrapper]}>
          <View
            style={[
              styles.menuItemIconWrapper,
              active === "post" && styles.menuItemIconWrapperActive,
            ]}
          >
            <BeerMug
              height={16}
              width={16}
              fill={active === "post" ? colors.white : colors.medium}
            />
          </View>

          <Text
            style={[
              styles.menuItemText,
              active === "post" && styles.menuItemTextActive,
            ]}
          >
            Post
          </Text>
        </View>
      </Link>
      <Link
        href={"profile"}
        onPress={handleActive.bind(null, "profile")}
        style={styles.menuItemWrapper}
      >
        <View style={[styles.menuItemWrapper]}>
          <View
            style={[
              styles.menuItemIconWrapper,
              active === "profile" && styles.menuItemIconWrapperActive,
            ]}
          >
            <BeerMug
              height={16}
              width={16}
              fill={active === "profile" ? colors.white : colors.medium}
            />
          </View>

          <Text
            style={[
              styles.menuItemText,
              active === "profile" && styles.menuItemTextActive,
            ]}
          >
            Profile
          </Text>
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

  menuItemIconWrapper: {
    borderRadius: 8,
    padding: 8,
  },
  menuItemIconWrapperActive: {
    backgroundColor: colors.primary,
  },
  menuItemText: {
    marginTop: spacing.xs,
    fontSize: 16,
    color: colors.medium,
  },
  menuItemTextActive: {
    color: colors.primary,
  },
});
