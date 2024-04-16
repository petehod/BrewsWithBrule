import { BeerMug } from "../components/Icons/BeerMug";
import { AppContainer } from "../components/AppContainer/AppContainer";
import { Stack } from "expo-router";
import { colors } from "../constants/colors";

// TODO: Add a header icon to the Stack navigator
function HeaderIcon() {
  return <BeerMug />;
}

export default function RootLayoutNav() {
  return (
    <AppContainer>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: colors.white,
          },
          headerTitle: "Brews With Brule",
        }}
      ></Stack>
    </AppContainer>
  );
}
