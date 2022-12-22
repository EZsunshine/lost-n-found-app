import { useContext } from 'react';
import { View } from 'react-native';
import Form from '../../components/AddLost/Form';
import { LostItemContext } from '../../store/lost-context';

function AddLostItem({navigation}) {
    const lostContext = useContext(LostItemContext);

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(lostData) {
        lostContext.addLost(lostData);
        navigation.goBack();
    }
    return ( 
        <View>
            <Form onCancel={cancelHandler} onSubmit={confirmHandler} />
        </View>
        
     );
}

export default AddLostItem;

