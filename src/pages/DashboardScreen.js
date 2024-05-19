import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { getScreenDimensions } from '../utils/getDimension';
import pageStyle from "../pages/stylesheet"
import { DataTable, Button as ButtonRNP} from 'react-native-paper';
const { width, height } = getScreenDimensions();

const DashboardScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([5, 7, 9]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = useState([
   {
     key: 1,
     name: 'Airbus A320',
     calories: 356,
     fat: 16,
   },
   {
     key: 2,
     name: 'Antonov AN225',
     calories: 262,
     fat: 16,
   },
   {
     key: 3,
     name: 'Mistubishi R1000',
     calories: 159,
     fat: 6,
   },
   {
     key: 4,
     name: 'Dongfeng 932',
     calories: 305,
     fat: 3.7,
   },
   {
     key: 1,
     name: 'Airbus A320',
     calories: 356,
     fat: 16,
   },
   {
     key: 2,
     name: 'Antonov AN225',
     calories: 262,
     fat: 16,
   },
   {
     key: 3,
     name: 'Mistubishi R1000',
     calories: 159,
     fat: 6,
   },
   {
     key: 4,
     name: 'Dongfeng 932',
     calories: 305,
     fat: 3.7,
   },
   {
     key: 1,
     name: 'Airbus A320',
     calories: 356,
     fat: 16,
   },
   {
     key: 2,
     name: 'Antonov AN225',
     calories: 262,
     fat: 16,
   },
   {
     key: 3,
     name: 'Mistubishi R1000',
     calories: 159,
     fat: 6,
   },
   {
     key: 4,
     name: 'Dongfeng 932',
     calories: 305,
     fat: 3.7,
   },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={pageStyle.headerContainer}>
        <Text style={pageStyle.header}>Dashboard</Text>
      </View>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Quantity</DataTable.Title>
        <DataTable.Title numeric>Action</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key} style={{ justifyContent:"center", flex:1 }}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric><ButtonRNP icon="eye" onPress={() => Alert.alert("View detail")}/></DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: width / 20,
  },
});
