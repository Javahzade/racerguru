import {format} from 'date-fns';
import {DriverModel} from 'models/drivers';
import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props extends DriverModel {}

export const DriverInfo: React.FC<Props> = ({
  familyName,
  givenName,
  nationality,
  dateOfBirth,
  url,
}) => {
  const formattedDateOfBirth = React.useMemo(
    () => format(new Date(dateOfBirth), 'dd MMM yyyy'),
    [dateOfBirth],
  );
  const handleShowInWikiPress = (): void => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>
        Full name: {givenName} {familyName}
      </Text>
      <Text style={styles.fullName}>Nationality: {nationality}</Text>
      <Text style={styles.fullName}>
        Date of Birthday: {formattedDateOfBirth}
      </Text>
      <Text style={styles.showInWikiText} onPress={handleShowInWikiPress}>
        Show in Wiki
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  fullName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  showInWikiText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
