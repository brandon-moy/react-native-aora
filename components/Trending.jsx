import { View, Text, FlatList } from "react-native";
import React from "react";
import EmptyState from "./EmptyState";

const Trending = ({ posts }) => {
  return (
    <FlatList
      // data={posts}
      data={[]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
