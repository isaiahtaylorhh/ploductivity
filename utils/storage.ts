import AsyncStorage from '@react-native-community/async-storage';
import {useState, useEffect} from 'react';

//https://gist.github.com/EduVencovsky/dbaff299f7de6fe94538086c137f21d3
export const useStorage = (
  key: string,
  initialValue: number,
): [number, Function] => {
  const [hasLoad, setHasLoad] = useState(false);
  const [data, setData] = useState(initialValue);

  const set = async (newData: number) => {
    setData(newData);
    return newData === null
      ? AsyncStorage.removeItem(key)
      : AsyncStorage.setItem(key, JSON.stringify(newData));
  };

  useEffect(() => {
    setHasLoad(false);
  }, [key]);

  useEffect(() => {
    if (!hasLoad) {
      AsyncStorage.getItem(key).then((res) => {
        if (res === null) {
          AsyncStorage.setItem(key, JSON.stringify(data));
          setData(data);
        } else {
          setData(JSON.parse(res));
        }
        setHasLoad(true);
      });
    }
  }, [key, hasLoad, data]);

  return [data, set];
};
