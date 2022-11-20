import enumAction from "../enumAction/enumAction";

type ActionByText = {
  type: enumAction.SET_TITLE_TODO | enumAction.SET_TEXT_TODO;
  payload: string;
};
export default ActionByText;
