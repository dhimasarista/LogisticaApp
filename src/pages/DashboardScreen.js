import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import { getScreenDimensions } from '../utils/getDimension';
import pageStyle from "../pages/stylesheet";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const { width, height } = getScreenDimensions();

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={pageStyle.headerContainer}>
        <Text style={pageStyle.header}>Dashboard</Text>
      </View>
      <View style={styles.tableContainer}>
        <DataTable
          data={[ 
            { name: 'Muhammad Rafeh', age: 21, gender: 'male' },
            { name: 'Muhammad Akif', age: 22, gender: 'male' },
            { name: 'Muhammad Umar', age: 21, gender: 'male' },
            { name: 'Amna Shakeel', age: 22, gender: 'female' },
            { name: 'Muhammad Ammar', age: 20, gender: 'male' },
            { name: 'Muhammad Moiz', age: 13, gender: 'male' },
            { name: 'Amna Shakeel', age: 22, gender: 'female' },
            { name: 'Muhammad Ammar', age: 20, gender: 'male' },
            { name: 'Muhammad Moiz', age: 13, gender: 'male' },
            { name: 'Amna Shakeel', age: 22, gender: 'female' },
            { name: 'Muhammad Ammar', age: 20, gender: 'male' },
            { name: 'Muhammad Moiz', age: 13, gender: 'male' },
            { name: 'Amna Shakeel', age: 22, gender: 'female' },
            { name: 'Muhammad Ammar', age: 20, gender: 'male' },
            { name: 'Muhammad Moiz', age: 13, gender: 'male' },
          ]}
          colNames={['name', 'age', 'gender']}
          colSettings={[
            { name: 'name', type: COL_TYPES.STRING, width: '50%' }, 
            { name: 'age', type: COL_TYPES.INT, width: '20%' }, 
            { name: 'gender', type: COL_TYPES.STRING, width: '35%' }
          ]}
          noOfPages={2}
          backgroundColor={'rgba(255, 255, 255, 0.9)'}
          headerLabelStyle={{ color: 'black', fontSize: 12 }}
          borderRadius={10}
          stickyHeader={false}
        />
        <ActivityIndicator animating={true} color={MD2Colors.pink50} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: width / 20,
  },
  tableContainer: {
    width: width * 0.9,
    backgroundColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 2,
    height: height / 1.7,
  },
});

export default DashboardScreen;
