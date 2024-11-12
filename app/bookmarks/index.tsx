import React from "react";
import { useQuery } from "@apollo/client";
import { Text, View, Button, FlatList } from "react-native";
import { GET_BOOKMARKS } from "@/graphql/queries";
import AppCard from "@/components/AppCard";

const BookmarksPage = () => {
  const { data, loading, error } = useQuery(GET_BOOKMARKS);
  console.log("data", error);

  if (loading) return <Text style={{ margin: 16 }}>Loading...</Text>;
  if (error) return <Text style={{ margin: 16 }}>Error: {error.message}</Text>;

  return (
    <View style={{ margin: 16, height: "100%" }}>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          marginTop: 24,
          fontWeight: "bold",
        }}
      >
        Your Bookmarked Events
      </Text>
      <View style={{ marginTop: 60 }}>
        <FlatList
          data={data.getBookmarks}
          horizontal={true}
          renderItem={({ item }) => <AppCard cardInfo={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
export default BookmarksPage;
