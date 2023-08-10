import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootNavigator} from 'modules/navigation/RootNavigator';
import {Provider} from 'react-redux';
import {store} from 'modules/redux/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.root}>
        <GestureHandlerRootView style={styles.root}>
          <RootNavigator />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
