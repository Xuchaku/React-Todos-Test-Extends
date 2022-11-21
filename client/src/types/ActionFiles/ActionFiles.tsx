import enumAction from "../enumAction/enumAction";

type ActionFiles = {
  type: enumAction.SET_FILES_TODO;
  payload: string[];
};
export default ActionFiles;
