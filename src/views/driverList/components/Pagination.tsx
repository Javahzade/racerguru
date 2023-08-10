import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrowBack from 'assets/icons/arrow-back.svg';
import ArrowForward from 'assets/icons/arrow-forward.svg';
import {debounce} from 'lodash';

interface Props {
  currentPage: number;
  totalPage: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalPage,
  onPrevPage,
  onNextPage,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.button}
        disabled={currentPage === 1}
        onPress={debounce(onPrevPage, 100)}>
        <ArrowBack fill={'white'} width={24} height={24} />
      </TouchableOpacity>
      <Text style={styles.page}>
        {currentPage} of {totalPage}
      </Text>
      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.button}
        disabled={currentPage === totalPage}
        onPress={debounce(onNextPage, 100)}>
        <ArrowForward fill={'white'} width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'tomato',
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  page: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});
