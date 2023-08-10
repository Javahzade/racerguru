import {BackHeader} from 'components/BackHeader';
import React, {memo} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RaceLapsVM} from './vm';
import {RaceLapsTimingModel} from 'models/races';
import {LapItem} from './components/LapItem';
import {TableHeader} from 'views/driverList/components/TableHeader';

const RaceLaps: React.FC<RaceLapsVM> = ({raceInfo, laps}) => {
  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<RaceLapsTimingModel>) => <LapItem {...item} />,
    [],
  );

  const keyExtractor = React.useCallback(
    (item: RaceLapsTimingModel) => item.driverId,
    [],
  );

  return (
    <View style={styles.container}>
      <BackHeader title="Race laps">
        <Text style={styles.raceInfoText}>
          {raceInfo?.raceName} {raceInfo?.round} {raceInfo?.season}
        </Text>
      </BackHeader>
      <TableHeader headers={['Driver name', 'Position', 'Time']} />
      <FlatList
        data={laps}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
};

export const RaceLapsView = memo(RaceLaps);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  contentList: {
    flexGrow: 1,
    paddingVertical: 6,
  },
  raceInfoText: {
    color: 'white',
    fontWeight: '500',
    marginRight: 12,
  },
});
