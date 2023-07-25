import { View, Text, StyleSheet, Vibration } from 'react-native';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { useState } from 'react';
import { colors } from '../utils/colors';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN= [
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  let isNull = 0;
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(0.1)

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject)
  }
  return(
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown minutes = {minutes}
                   isPaused={!isStarted} 
                   onProgress={setProgress}
                   onEnd={onEnd}
        />
      </View>
      <View style={{margin: 50}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{marginBottom: 10}}>
        <ProgressBar progress={progress}/>
      </View>
      <View style={{marginBottom: 10}}>
        <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.buttons}>
        <RoundedButton title={'start'}
                       style={styles.button} 
                       onPress = {() => {setIsStarted(true);}} 
        />
        <RoundedButton title={'stop'} 
                       onPress = {() => setIsStarted(false)} 
        />
      </View>
      <View style={styles.buttons}>
        <RoundedButton title={'-'} 
                       onPress = {()=>clearSubject()} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
   button: {
    marginRight: 10,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold'
  },
  task: {
    textAlign: 'center',
    color: colors.white
  }
})