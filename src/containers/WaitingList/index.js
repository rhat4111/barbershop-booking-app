import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';

const WaitingList = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const waitingLists = [
    {
      salon: 'Look Easy1',
      employee: 'Ricardi Easy',
      service: 'Hair Cut(Men)',
      date: '06-20-2021',
      time: {
        start: '16:00',
        end: '18:00',
      },
    },
  ];
  return (
    <>
      <ScrollView style={styles.container}>
        {waitingLists.length > 0 ? (
          <>
            {waitingLists.map((list, index) => {
              return (
                <View style={styles.item} key={index}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.timeTxt}>{list.date} </Text>
                    <Text style={styles.timeTxt}>
                      {list.time.start} - {list.time.end}
                    </Text>
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.txt}>Salon: {list.salon}</Text>
                    <Text style={styles.txt}>Employee: {list.employee}</Text>
                    <Text style={styles.txt}>Service: {list.service}</Text>
                    <TouchableOpacity
                      style={styles.cancel}
                      onPress={() => setIsShowModal(true)}>
                      <Text style={styles.cancelTxt}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </>
        ) : (
          <Text style={[styles.txt, {textAlign: 'center'}]}>Nothing Found</Text>
        )}
      </ScrollView>
      <Modal animationType="fade" transparent={true} visible={isShowModal}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => setIsShowModal(false)}>
            <View style={styles.modalBg} />
          </TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Text style={styles.modalContent}>Are you sure cancel?</Text>
            <View style={styles.toolbar}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setIsShowModal(false)}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setIsShowModal(false)}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default WaitingList;
