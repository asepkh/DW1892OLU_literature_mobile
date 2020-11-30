import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

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
        <View style={styles.overlay}>
          <View style={styles.statusBackground}>
            {item.status === "Pending" ? (
              <Text style={styles.pending}>Waiting to be verified</Text>
            ) : (
              <Text style={styles.rejected}>Rejected</Text>
            )}
          </View>
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

  return literatures.length > 0 ? (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      showsVerticalScrollIndicator={true}
      columnWrapperStyle={styles.column}
      onRefresh={() => {
        setIsRefresh(true);
        refetch();
        setIsRefresh(false);
      }}
      refreshing={isRefresh}
    />
  ) : (
    <Text style={styles.textResult}>Result Not Found</Text>
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
  textResult: {
    color: "white",
    textAlign: "center",
  },
  overlay: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: -5,
    bottom: -5,
    left: -5,
    right: -5,
    zIndex: 10,
    backgroundColor: "rgba(10,10,10,0.5)",
    borderRadius: 10,
  },
  statusBackground: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  pending: {
    color: "yellow",
    fontWeight: "700",
  },
  rejected: {
    color: "red",
    fontWeight: "700",
  },
});

LiteraturesList.defaultProps = {
  profile: false,
};

export default LiteraturesList;
