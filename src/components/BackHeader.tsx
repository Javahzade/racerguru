import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrowBack from 'assets/icons/arrow-back.svg';
import {useNavigation} from '@react-navigation/native';

interface Props extends React.PropsWithChildren {
  title: string;
}

export const BackHeader: React.FC<Props> = ({title, children}) => {
  const navigation = useNavigation();
  const handleGoBack = (): void => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.accessoryLeft}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.goBackButton}
          onPress={handleGoBack}>
          <ArrowBack fill="white" width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accessoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  goBackButton: {
    padding: 8,
  },
});
