// import { useState, useEffect } from 'react';
// import { AppState,removeEventListener,addEventListener} from 'react-native';
// function useAppState() {
//   const [appState, setAppState] = useState(AppState.currentState);
//   useEffect(() => {
//     const handleAppStateChange = (nextAppState) => {
//       setAppState(nextAppState);
//     };
//     AppState.addEventListener('change', handleAppStateChange);  // them sk lawng nghe
//     return () => {
//       AppState.removeEventListener('change', handleAppStateChange);
//     };
//   }, [appState]);
//   return appState;
// }
// export default useAppState;
import { useState, useEffect } from 'react';
import { AppState } from 'react-native';
function useAppState() {
  const [appState, setAppState] = useState(AppState.currentState);
  // useEffect(() => {
  //   const handleAppStateChange = (nextAppState) => {
  //     setAppState(nextAppState);
  //   };
  //   const subscription = AppState.addEventListener('change', handleAppStateChange);
  //   return () => {
  //     subscription.remove();
  //   };
  // }, [AppState.currentState]);
  return appState;
}
export default useAppState;

