import { combineReducers } from 'redux';
import onlineReducers from '@/modules/online/reducers/index';

export default combineReducers({
  ...onlineReducers
});
