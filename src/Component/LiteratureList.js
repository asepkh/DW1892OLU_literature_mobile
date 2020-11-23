import React, { useState } from "react";
import {
  TouchableHighlight,
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import LiteratureCard from "./LiteratureCard";

const LiteraturesList = ({ literatures, refetch, profile }) => {
  const [isRefresh, setIsRefresh] = useState(false);

  const data = literatures.filter((literature) => {
    if (!profile) return literature.status === "Approved";
    else return literature;
  });

  const renderItem = ({ item, index }) => (
    <View style={styles.render}>
      {item.status !== "Approved" && (
        <View style={overlayStyle}>
          {item.status === "Pending" ? (
            <Text style={styles.pending}>Waiting to be verified</Text>
          ) : (
            <Text style={styles.rejected}>Rejected</Text>
          )}
        </View>
      )}
      <LiteratureCard
        id={item.id}
        title={item.title}
        author={item.author}
        year={item.publication.substring(0, 4)}
        thumbnail={item.thumbnailUrl}
        key={index}
      />
    </View>
  );

  return !literatures ? (
    <Text>error</Text>
  ) : (
    // <View style={styles.container}>
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.column}
      onRefresh={() => {
        setIsRefresh(true);
        refetch();
        setIsRefresh(false);
      }}
      refreshing={isRefresh}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  column: {
    width: "100%",
    justifyContent: "space-between",
  },
  render: {
    width: "47%",
    marginBottom: 25,
  },
  pending: {},
  rejected: {},
});

const overlayStyle = {
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  top: "-5px",
  bottom: "-5px",
  left: "-5px",
  right: "-5px",
  zIndex: "10",
  backgroundColor: "rgba(0,0,0,0.5)",
  borderRadius: 10,
};

LiteraturesList.defaultProps = {
  profile: false,
};

export default LiteraturesList;
