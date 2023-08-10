import {format} from 'date-fns';
import {DriverModel} from 'models/drivers';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props extends DriverModel {
  onShowDetailsPress: () => void;
}

export const DriverItem: React.FC<Props> = ({
  givenName,
  familyName,
  nationality,
  dateOfBirth,
  onShowDetailsPress,
}) => {
  const formattedDateOfBirth = React.useMemo(
    () => format(new Date(dateOfBirth), 'dd MMM yyyy'),
    [dateOfBirth],
  );

  return (
    <View style={styles.container}>
      <View style={styles.tableRow}>
        <Text style={styles.table}>
          {givenName} {familyName}
        </Text>
        <View style={styles.separator} />
        <Text style={styles.table}>{nationality}</Text>
        <View style={styles.separator} />
        <Text style={styles.table}>{formattedDateOfBirth}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.button}
        onPress={onShowDetailsPress}>
        <Text style={styles.showDetailsText}>Show details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    borderWidth: 1,
    borderColor: 'gray',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  table: {
    flex: 1,
    padding: 8,
    alignSelf: 'center',
  },
  separator: {
    backgroundColor: 'gray',
    width: 1,
  },
  button: {
    padding: 4,
    backgroundColor: '#ADC4CE',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  showDetailsText: {
    textAlign: 'center',
  },
});
