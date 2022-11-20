import enumAction from "../enumAction/enumAction";

type ActionByDate = {
  type: enumAction.SET_DATE_TODO;
  payload: Date;
};
export default ActionByDate;
