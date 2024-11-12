import React from "react";
import { useQuery } from "@apollo/client";
import { Text, View, Button, FlatList } from "react-native";
import { GET_EVENTS } from "../graphql/queries";
import AppCard from "@/components/AppCard";

const MainPage = () => {
  const { data, loading, error } = useQuery(GET_EVENTS);
  console.log("data", error);

  if (loading) return <Text style={{ margin: 16 }}>Loading...</Text>;
  if (error) return <Text style={{ margin: 16 }}>Error: {error.message}</Text>;

  return (
    <View style={{ margin: 16 }}>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          marginTop: 24,
          fontWeight: "bold",
        }}
      >
        Our Events
      </Text>
      <View style={{ marginTop: 60 }}>
        <FlatList
          data={data.getEvents}
          horizontal={true}
          renderItem={({ item }) => <AppCard cardInfo={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
export default MainPage;
