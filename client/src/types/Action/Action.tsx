import ActionByDate from "../ActionByDate/ActionByDate";
import ActionByText from "../ActionByText/ActionByText";
import ActionFiles from "../ActionFiles/ActionFiles";

type Action = ActionByText | ActionByDate | ActionFiles;

export default Action;
