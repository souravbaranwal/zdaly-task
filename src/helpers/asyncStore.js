import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {
    return null;
  }
};

const getItem = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch {
    return null;
  }
};

const removeItem = async key => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch {
    return null;
  }
};

export {setItem, getItem, removeItem};
