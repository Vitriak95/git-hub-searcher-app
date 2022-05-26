import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionsCreators from '../action-creators/index';

export const useActions = () => {
  const dispatch = useDispatch();
  console.log('ActionsCreators', ActionsCreators)
  return bindActionCreators(ActionsCreators, dispatch)
}
