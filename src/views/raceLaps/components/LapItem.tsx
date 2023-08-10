import {RaceLapsTimingModel} from 'models/races';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDriverInfo} from 'utils/hooks/useDriverInfo';

interface Props extends RaceLapsTimingModel {}

export const LapItem: React.FC<Props> = ({driverId, position, time}) => {
  const driver = useDriverInfo({driverId});

  const renderDriver = React.useMemo(() => {
    if (driver) {
      return (
        <Text style={styles.table}>
          {driver.givenName} {driver.familyName}
        </Text>
      );
    }
  }, [driver]);

  return (
    <View style={styles.tableRow}>
      {renderDriver}
      <Text style={styles.table}>{position}</Text>
      <Text style={styles.table}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    borderWidth: 1,
    borderColor: 'gray',
  },
  table: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
  },
});
