import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";

export const createID = () => {
  return Math.floor(
    Math.random(100000, 999999) * (999999 - 100000 + 1) * 100000
  )
    .toString(10)
    .substring(0, 6);
};
export const storeData = async (data, setEventData) => {
  try {
    let temp = JSON.parse(await AsyncStorage.getItem("@myapp:list")) || [];

    temp.push(data);
    await AsyncStorage.setItem("@myapp:list", JSON.stringify(temp));
    setEventData(temp);
  } catch (error) {
    console.warn("erreur de stockage :", error.message);
  }
};
export const getDatas = async () => {
  let data = await AsyncStorage.getItem("@myapp:list");

  if (!data) {
    return;
  } else {
    data = JSON.parse(data);

    return data;
  }
};
const getOneEvent = async (id) => {
  let data = await AsyncStorage.getItem("@myapp:list");

  if (!data) {
    return;
  } else {
    data = JSON.parse(data);
    data.map((item) => {
      if (item.id === id) {
        return item;
      }
    });
  }
};

export const deleteEvent = async (id, setEventData) => {
  const temp = await getDatas();

  let res = [];
  temp.forEach((item) => {
    if (item.id !== id) {
      res.push(item);
    }
  });
  await AsyncStorage.setItem("@myapp:list", JSON.stringify(res));
  setEventData(res);
  return res;
};
export const deleteManyEvent = async (idList, setEventData) => {
  const temp = await getDatas();
  let res = [];
  temp.forEach((item) => {
    if (!idList.includes(item.id)) {
      res.push(item);
    }
  });
  await AsyncStorage.setItem("@myapp:list", JSON.stringify(res));
  setEventData(res);
};

export async function schedulePushNotification(title, body, duration) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `${title} 📬`,
      body: body,
      data: { data: "goes here", test: { test1: "more data" } },
    },
    trigger: duration,
  });
}
export const addReminder = async (title, body, type, id, setNotifsDatas) => {
  try {
    let temp = await getNotifications();
    if (!temp) temp = [];
    temp.push({ title, body, type, id });
    setNotifsDatas(temp);
    await AsyncStorage.setItem("@myapp:reminder", JSON.stringify(temp));
  } catch (e) {
    console.warn("there", e.message);
  }
};
export const getNotifications = async () => {
  const temp = await AsyncStorage.getItem("@myapp:reminder");
  res = JSON.parse(temp);
  return res;
};
export const deleteReminder = async (id, setNotifsDatas) => {
  const temp = await getNotifications();
  let res = [];
  temp.forEach((reminder) => {
    if (reminder.id !== id) {
      res.push(reminder);
    }
  });
  try {
    setNotifsDatas(res);
    await AsyncStorage.setItem("@myapp:reminder", JSON.stringify(res));
  } catch (e) {
    console.warn(e);
  }
};
export const createAccount = async (firstname, surname) => {
  try {
    await AsyncStorage.setItem(
      "@myapp:account",
      JSON.stringify({ firstname, surname })
    );
    return "Account created";
  } catch (error) {
    console.warn(error.message);
  }
};
export const getAccount = async () => {
  let res = await AsyncStorage.getItem("@myapp:account");
  res = JSON.parse(res);
  return res;
};
export const haveAccount = async () => {
  const temp = await getAccount();
  return temp !== null;
};
export const deleteAccount = async () => {
  await AsyncStorage.setItem("@myapp:account", "");
  router.navigate((href = "/"));
};
