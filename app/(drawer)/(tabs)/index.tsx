import { Image, StyleSheet, Platform , Modal, ScrollView,View, Text, Button} from 'react-native';
import { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Toast from 'react-native-toast-message';
export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
<ScrollView >
<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
                <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Este es un mensaje informativo</Text>
            <Button title="Cerrar" onPress={toggleModal} />
          </View>
        </View>
      </Modal>

  <CalendarList
    markingType={'custom'}
    hideDayNames= {true}
    hideExtraDays={true}
    onDayPress={day => {
      console.log("hola")
toggleModal
    }}
    minDate={'2025-02-07'}
    maxDate={'2025-02-015'}
    pastScrollRange={2}
    futureScrollRange={5}
    scrollEnabled={true}
    showScrollIndicator={true}
    monthFormat={'MMMM'}  
    markedDates={{
      '2025-02-07': {customStyles: {
        container: {
          backgroundColor: 'green',
        },
        text: {
          color: 'white',
          fontWeight: 'bold'
        }
      }},
    }}
    theme={{
      backgroundColor: '#fffff', // Un verde suave y natural como fondo
      calendarBackground: '#fffff', // Consistencia con el fondo de la aplicación
      textSectionTitleColor: '#557f59', // Un verde más oscuro para los títulos, que se asemeja a la naturaleza
      textSectionTitleDisabledColor: '#a1c3a1', // Verde claro y suave para los títulos desactivados
      selectedDayBackgroundColor: '#a3d9c5', // Verde fresco para los días seleccionados
      selectedDayTextColor: '#ffffff', // Texto blanco para destacarse
      todayTextColor: '#4b9f74', // Un verde más profundo para el día actual
      dayTextColor: '#4a5568', // Gris suave para los días normales
      textDisabledColor: '#c0c8d0',
      dotColor: '#a3d9c5', // Verde suave para los puntos en el calendario
      selectedDotColor: '#ffffff', // Blanco para los puntos seleccionados
      arrowColor: '#4b9f74', // Verde más profundo para las flechas
      disabledArrowColor: '#a1c3a1', // Gris claro para las flechas deshabilitadas
      monthTextColor: '#4a5568', // Gris suave para los nombres de los meses
      indicatorColor: '#4b9f74', // Verde natural para el indicador
      textDayFontFamily: 'Lora', // Fuente serif que transmite naturaleza
      textMonthFontFamily: 'Lora',
      textDayHeaderFontFamily: 'Lora',
      textDayFontWeight: '300',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: '300',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
    }}
    
  />
  </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10, // Asegura que el modal esté por encima
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    zIndex: 11, // Este valor asegura que el contenido del modal esté encima
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
