import {BackHeader} from 'components/BackHeader';
import React, {memo} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {DriverDetailsVM} from './vm';
import {DriverModel} from 'models/drivers';
import {DriverInfo} from './components/DriverInfo';

const DriverDetails: React.FC<DriverDetailsVM> = ({drivers}) => {
  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<DriverModel>) => <DriverInfo {...item} />,
    [],
  );

  const keyExtractor = React.useCallback(
    (item: DriverModel) => item.driverId,
    [],
  );
  return (
    <View style={styles.container}>
      <BackHeader title="Details" />
      <FlatList
        data={drivers}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export const DriverDetailsView = memo(DriverDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
