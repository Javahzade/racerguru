import React, {memo} from 'react';
import {
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from 'react-native';
import {DriverListVM} from './vm';
import {DriverModel} from 'models/drivers';
import {DriverItem} from './components/DriverItem';
import {TableHeader} from './components/TableHeader';
import {Pagination} from './components/Pagination';

const DriverList: React.FC<DriverListVM> = ({
  isLoading,
  isError,
  currentPage,
  totalPage,
  drivers,
  onPrevPage,
  onNextPage,
  handleShowDetailsPress,
  handleShowLapsPress,
  handleFetchDrivers,
}) => {
  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<DriverModel>) => (
      <DriverItem
        {...item}
        onShowDetailsPress={() => handleShowDetailsPress(item.driverId)}
      />
    ),
    [handleShowDetailsPress],
  );

  const keyExtractor = React.useCallback(
    (item: DriverModel) => item.driverId,
    [],
  );

  const renderLoading = React.useMemo(
    () =>
      isLoading && (
        <View style={styles.indicatorStyle}>
          <ActivityIndicator color={'tomato'} size={'large'} />
        </View>
      ),
    [isLoading],
  );

  const renderError = React.useMemo(
    () =>
      isError && (
        <View style={styles.errorStyle}>
          <Text style={styles.errorText}>Something went wrong...</Text>
          <Button title="Refresh" onPress={handleFetchDrivers} />
        </View>
      ),
    [isError, handleFetchDrivers],
  );

  return (
    <View style={styles.container}>
      <TableHeader headers={['Driver name', 'Nationality', 'DOB']} />
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentList}
        data={drivers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      {renderError}
      {renderLoading}
      <View style={styles.showLapsContainer}>
        <TouchableOpacity
          style={styles.showLapsButton}
          activeOpacity={0.75}
          onPress={handleShowLapsPress}>
          <Text style={styles.showLapsText}>Show laps</Text>
        </TouchableOpacity>
      </View>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    </View>
  );
};

export const DriverListView = memo(DriverList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
  },
  indicatorStyle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  errorStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  contentList: {
    flexGrow: 1,
    paddingVertical: 6,
  },
  showLapsContainer: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showLapsButton: {
    padding: 8,
  },
  showLapsText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '600',
  },
});
