import { View } from "react-native";
import { Header } from "../components/Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <View>{children}</View>
    </>
  );
}
