import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';


export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text, //ES6 feature,
    dueDate
  };
  console.log('action in addReminder', action);
  return action;
};

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  };
  console.log('ACTION to DELETE Reminder ', action)
  return action;
};

export const clearReminders = () => {
    return{
        type: CLEAR_REMINDERS
    }
};