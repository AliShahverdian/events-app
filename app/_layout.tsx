import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Slot } from "expo-router";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { View } from "react-native";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <View style={{ position: "relative", height: "100vh" }}>
        <AppHeader />
        <Slot />
        <AppFooter />
      </View>
    </ApolloProvider>
  );
}
