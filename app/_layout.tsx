import { BeerMug } from "../components/Icons/BeerMug";
import { AppContainer } from "../components/AppContainer/AppContainer";
import { Link, Stack, useRouter } from "expo-router";
import { colors } from "../constants/colors";
import { Menu } from "../components/Menu/Menu";

export default function RootLayoutNav() {
  return (
    <AppContainer>
      <Stack
        screenOptions={{
          title: "",
          animation: "none",
          headerTintColor: colors.white,

          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: () => (
            <Link href={""}>
              <BeerMug height={24} width={24} />
            </Link>
          ),
        }}
      ></Stack>
      <Menu />
    </AppContainer>
  );
}
