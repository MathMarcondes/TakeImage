import {Modal, View, Text, Pressable, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function EmojiPicker({isVisible, children, onClose}) {
    return (                                                                   
        <Modal animationType = "slide" transparent={true} visible={isVisible}> {/*Modal -> componente exibe um título e um botão fechar*/} 
          <View style = {styles.modalContent}>                                 {/*Visible prop assume o valor isVisible e controla se o modal está aberto ou fechado*/}    
            <View style = {styles.titleContainer}>                             {/*Transparent propriedade é um valor booleano que determina se o modal preenche toda a sua visualização*/}
                <Text style = {styles.title}>Choose a sticker</Text>           {/*AnimationType suporte determina como ele entra e sai da tela. Neste caso, ele desliza da parte inferior da tela*/}     
                <Pressable onPress={onClose}>                                  {/*EEmojiPicker onClose propriedade é chamada quando o usuário pressiona close */}
                    <MaterialIcons name = "close" color="#fff" size={22}/>
                </Pressable>
            </View>
        {children}
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
  });
  