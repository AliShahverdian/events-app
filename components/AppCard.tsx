import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "@/graphql/mutations";
import { GET_BOOKMARKS } from "@/graphql/queries";

type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
};

const AppCard = ({ cardInfo }: { cardInfo: Event }) => {
  const [bookmarked, setBookMarked] = useState<boolean>(false);
  const [addBookmark] = useMutation(ADD_BOOKMARK);
  const [removeBookmark] = useMutation(REMOVE_BOOKMARK);
  const { data: bookmarks } = useQuery(GET_BOOKMARKS);

  const bookmarkIcon = async (id: string) => {
    setBookMarked(!bookmarked);
    if (bookmarked) {
      try {
        const data = await removeBookmark({ variables: { eventId: id } });
        console.log("Removed Bookmark:", data);
      } catch (error) {
        console.error("Error removing bookmark:", error);
      }
    } else {
      try {
        const data = await addBookmark({ variables: { eventId: id } });
        console.log("Added Bookmark:", data);
      } catch (error) {
        console.error("Error adding bookmark:", error);
      }
    }
  };
  useEffect(() => {
    const item = bookmarks?.getBookmarks.find(
      (el: Event) => el.id === cardInfo.id
    );
    if (!item) {
      return;
    } else {
      setBookMarked(true);
    }
  }, [bookmarks]);

  return (
    <View
      style={{
        margin: 4,
        borderColor: "gray",
        borderRadius: 16,
        borderStyle: "solid",
        borderWidth: 2,
        width: 160,
        height: 270,
        paddingVertical: 16,
        paddingHorizontal: 8,
      }}
    >
      <View>
        <Text style={{ textAlign: "center", fontSize: 16, height: 80 }}>
          {cardInfo.title}
        </Text>
        <View style={{ height: 100 }}>
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 16 }}>
            {cardInfo.description}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 16 }}>
            {cardInfo.location}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 12, marginTop: 16 }}>
            {cardInfo.date}
          </Text>
        </View>
        <View
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {bookmarked && (
            <FontAwesome
              name="bookmark"
              size={24}
              color="black"
              onPress={() => bookmarkIcon(cardInfo.id)}
            />
          )}
          {!bookmarked && (
            <Feather
              name="bookmark"
              size={24}
              color="black"
              onPress={() => bookmarkIcon(cardInfo.id)}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default AppCard;
