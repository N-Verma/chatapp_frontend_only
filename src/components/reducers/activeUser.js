import {ACTIVE_USER_ID} from '../constants/action_types';


export default function activeUserId(state = null, action) {
    switch(action.type){
      case ACTIVE_USER_ID:
        return action.payload;
      default:
        return state;
    }
  }