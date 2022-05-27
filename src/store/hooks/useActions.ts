import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';
import {actionCreators} from '../action-creators';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};