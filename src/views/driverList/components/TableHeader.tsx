import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  headers: string[];
}

export const TableHeader: React.FC<Props> = ({headers}) => {
  const renderHeaders = React.useMemo(() => {
    return headers.map(item => <Text style={styles.table}>{item}</Text>);
  }, [headers]);
  return <View style={styles.tableRow}>{renderHeaders}</View>;
};

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'tomato',
  },
  table: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
    color: 'white',
  },
});
