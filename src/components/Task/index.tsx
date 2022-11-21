import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import TrashIcon from "../../assets/trash.svg";
import CheckIcon from "../../assets/check.svg";
import UncheckIcon from "../../assets/uncheck.svg";

type Props = {
  name: string;
  check: boolean;
  onCheck: () => void;
  onRemove: () => void;
};

const Task = ({ name, check, onCheck, onRemove }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.btn} onPress={onCheck}>
          {check ? <CheckIcon /> : <UncheckIcon />}
        </TouchableOpacity>

        <View style={styles.textTaskContainer}>
          <Text style={styles.textTask}>{name}</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={onRemove}>
          <TrashIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
