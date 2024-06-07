import { View, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import EventCard from "../../components/eventCard";
import DaysList from "../../components/daysList";
import Header from "../../components/header";
import * as Notifications from "expo-notifications";
import { useLocalStorage } from "../../hooks/context";
import FilterButton from "../../components/onglet";
import { getDatas, schedulePushNotification } from "../../lib/functions";
// First, set the handler that will cause the notification
// to show the alert

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Second, call the method
for (let i = 0; i <= 6; i++) {
  schedulePushNotification("Test1", "corps de notif", { seconds: 2 })
    .then((res) => {})
    .catch((e) => {
      console.warn(e);
    });
}

const Home = () => {
  const { eventsDatas } = useLocalStorage();

  const color = ["blue", "red", "orange"];
  const [employeesDatas, setEmployeesDatas] = useState([]);

  const [tempData, setTempData] = useState(employeesDatas);
  useEffect(() => {
    getDatas().then((res) => {
      setEmployeesDatas(res);
      if (filterAll) {
        setTempData(res);
      }
      if (filterComing) {
        getComingEvent(res);
      }
      if (filterOngoing) {
        getOngoingEvent(res);
      }
    });
  }, [eventsDatas]);
  const [filterAll, setFilterAll] = useState(true);
  const [filterOngoing, setFilterOngoing] = useState(false);
  const [filterComing, setFilterComing] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState(false);

  const getOngoingEvent = (data = employeesDatas) => {
    let temp = [];
    data.map((item) => {
      if (
        new Date().getTime() >= new Date(item.startDate).getTime() &&
        new Date().getTime() < new Date(item.endDate).getTime()
      ) {
        temp.push(item);
      }
    });
    setTempData((v) => temp);
  };
  const getComingEvent = (data = employeesDatas) => {
    let temp = [];
    data.map((item) => {
      if (new Date().getTime() < new Date(item.startDate).getTime()) {
        temp.push(item);
      }
    });
    setTempData(temp);
  };
  const getCompletedEvent = (data = employeesDatas) => {
    let temp = [];
    data.map((item) => {
      if (new Date().getTime() >= new Date(item.endDate).getTime()) {
        temp.push(item);
      }
    });
    setTempData(temp);
  };
  return (
    <View>
      <Header />

      <SafeAreaView className="bg-white h-full">
        {/*d7dfe1*/}
        <FlatList
          className="h-full mb-[230px]"
          data={tempData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View className="my-3 w-full flex justify-center items-center">
                <EventCard
                  poste={item.poste}
                  motif={item.motif}
                  nom={item.nom}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  id={item.id}
                  color={color[index % 3]}
                />
              </View>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View className="">
                <DaysList />
                <View className="flex flex-row justify-between mx-[5%]">
                  <FilterButton
                    title={"Tout"}
                    setIsSelected={() => {
                      if (filterOngoing) {
                        setFilterOngoing(false);
                      }
                      if (filterComing) {
                        setFilterComing(false);
                      }
                      if (filterCompleted) {
                        setFilterCompleted(false);
                      }
                      setFilterAll((v) => true);
                    }}
                    isSelected={filterAll}
                    handlePress={() => {
                      setTempData(employeesDatas);
                    }}
                  />
                  <FilterButton
                    title={"En cours"}
                    setIsSelected={() => {
                      if (filterAll) {
                        setFilterAll(false);
                      }
                      if (filterComing) {
                        setFilterComing(false);
                      }
                      if (filterCompleted) {
                        setFilterCompleted(false);
                      }
                      setFilterOngoing((v) => true);
                    }}
                    isSelected={filterOngoing}
                    handlePress={() => {
                      getOngoingEvent();
                    }}
                  />
                  <FilterButton
                    title={"A venir"}
                    setIsSelected={() => {
                      if (filterAll) {
                        setFilterAll(false);
                      }
                      if (filterOngoing) {
                        setFilterOngoing(false);
                      }
                      if (filterCompleted) {
                        setFilterCompleted(false);
                      }
                      setFilterComing((v) => true);
                    }}
                    isSelected={filterComing}
                    handlePress={() => {
                      getComingEvent();
                    }}
                  />
                  <FilterButton
                    title={"Terminés"}
                    setIsSelected={() => {
                      if (filterAll) {
                        setFilterAll(false);
                      }
                      if (filterOngoing) {
                        setFilterOngoing(false);
                      }
                      if (filterComing) {
                        setFilterComing(false);
                      }
                      setFilterCompleted((v) => true);
                    }}
                    isSelected={filterCompleted}
                    handlePress={() => {
                      getCompletedEvent();
                    }}
                  />
                </View>
              </View>
            );
          }}
        />
        {/*
      <View className="w-full">
        <DaysList />
      </View>
      */}
      </SafeAreaView>
    </View>
  );
};
export default Home;
