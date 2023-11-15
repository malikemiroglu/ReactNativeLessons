import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
  const courses = [
    {name:'Anguler', id:1},
    {name:'React', id:2},
    {name:'React Native', id:3},
    {name:'Vue', id:4},
    {name:'Node', id:5},
  ];

  return (
    <FlatList data={courses}
    // horizontal={true}
    // showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {
        return <Text style={styles.content}>{item.name}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize : 20,
    backgroundColor: 'pink',
    marginVertical: 10,
    padding: 20,
  }
})