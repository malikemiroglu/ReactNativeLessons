import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Information from "../../components/Information";

const CoursesInformation = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Information
        title="Angular Eğitimi"
        imageSource={require("../../assets/angular.jpg")}
        desc="Kapsamlı Angular Eğitimi"
      />
      <Information
        title="Bootstrap 5 Eğitimi"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Kapsamlı Bootstrap Eğitimi"
      />
      <Information
        title="C Programlama Eğitimi"
        imageSource={require("../../assets/c.png")}
        desc="Kapsamlı C Programlama Eğitimi"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default CoursesInformation;
