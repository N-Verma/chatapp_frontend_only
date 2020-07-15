import user from './user';
import contacts from './contact';
import activeUser from './activeUser';
import messages from './messages';
import typing from './typing';
import { combineReducers } from "redux";
export default combineReducers({
    user,
    contacts,
    activeUser,
    messages,
    typing
});
