import {DUMMY_LOST} from '../../store/lost-context';
import LostList from '../../components/LostList';

function LostScreen() {
  return <LostList lostData={DUMMY_LOST} />
}

export default LostScreen;
