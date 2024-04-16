import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

export const PostCard = () => {
  return (
    <View style={styles.postCard}>
      <Image
        source={{
          uri: "https://149361544.v2.pressablecdn.com/wp-content/uploads/2017/10/harmony-bar-crawl-royal-caribbean.jpg",
        }}
        style={styles.postCardImage}
      />
      <Text style={styles.postCardTitle}>
        BWB Celebrating Honch&apos;s birthday
      </Text>
      <View>
        <Text style={styles.postCardDescription}>
          A group of friends gather at a local bar to celebrate one of their
          birthdays. The atmosphere is lively, with the smell of wings and the
          sound of TVs playing sports games in the background.
        </Text>

        <Text style={styles.postCardLocation}>
          📍Brian&apos;s Bar - Stillwater, MN
        </Text>
        <Text style={styles.postCardDate}>
          Posted on November 7, 2022 by @steviebrule
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: "#fff",
    padding: spacing.lg,
    borderRadius: 16,
    shadowColor: "#2c2c2c",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
    display: "flex",
  },
  postCardImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    objectFit: "cover",
    borderRadius: 4,
    marginBottom: spacing.xl,
  },
  postCardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: spacing.md,
  },
  postCardDescription: {
    fontSize: 16,
    marginBottom: spacing.lg,
  },
  postCardDate: {
    fontSize: 14,
    color: colors.dark,
  },
  postCardLocation: {
    color: colors.primary,
    fontWeight: "700",
    marginBottom: spacing.md,
  },
});
