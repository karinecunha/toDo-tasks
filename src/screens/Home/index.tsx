import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import Task from "../../components/Task";

type TaskProps = {
  name: string;
  check: boolean;
};

import LogoIcon from "../../assets/Logo.svg";
import PlusIcon from "../../assets/plus.svg";
import ClipboardIcon from "../../assets/Clipboard.svg";

export default function Home() {
  const [task, setTask] = useState<TaskProps>({
    name: "",
    check: false,
  });
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [countTaskConcluded, setCountTaskConcluded] = useState(0);
  const [countTaskCreated, setCountTaskCreated] = useState(0);

  useEffect(() => {
    setCountTaskConcluded(tasks.filter((item) => item.check === true).length);
    setCountTaskCreated(tasks.length);
  }, [tasks]);

  function handleTaskAdd() {
    console.log(tasks.filter((item) => item.check === true).length);
    if (tasks.find((e) => e.name === task.name)) {
      return Alert.alert("Atenção!", "Você já cadastrou essa tarefa.");
    }

    setTasks((prevState) => [...prevState, task]);
    setTask({ name: "", check: false });
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Tem certeza que deseja remover a tarefa?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => task.name !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskCheck(name: string) {
    let auxTasks = tasks;
    auxTasks.map((task: TaskProps) => {
      if (task.name === name) task.check = !task.check;
    });

    setTasks([...auxTasks]);
  }

  const EmptyComponent = () => {
    return (
      <>
        <View style={styles.separator}></View>
        <View style={styles.emptyListContainer}>
          <ClipboardIcon style={styles.imageEmptyList} />
          <Text style={[styles.textEmptyList, { fontWeight: "bold" }]}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.textEmptyList}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.topContainer}>
        <LogoIcon />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder={"Adicione uma nova tarefa"}
            placeholderTextColor={"#808080"}
            onChangeText={(txt) => setTask({ name: txt, check: false })}
            value={task ? task.name : ""}
          />
          <TouchableOpacity style={styles.btnPlus} onPress={handleTaskAdd}>
            <PlusIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.topList}>
          <View style={styles.qtdeTasksContainer}>
            <Text style={[styles.textTopList, styles.textCreated]}>
              Criadas
            </Text>
            <View style={styles.countTaskContainer}>
              <Text style={styles.textTopList}>{countTaskCreated}</Text>
            </View>
          </View>

          <View style={styles.qtdeTasksContainer}>
            <Text style={[styles.textTopList, styles.textConcluded]}>
              Concluídas
            </Text>
            <View style={styles.countTaskContainer}>
              <Text style={styles.textTopList}>{countTaskConcluded}</Text>
            </View>
          </View>
        </View>

        <View style={styles.flatlistContainer}>
          <FlatList
            data={tasks}
            style={styles.flatlist}
            contentContainerStyle={styles.contentContainerStyleFlatlist}
            keyExtractor={(task) => task.name}
            renderItem={({ item }) => (
              <Task
                key={item.name}
                name={item.name}
                check={item.check}
                onCheck={() => handleTaskCheck(item.name)}
                onRemove={() => handleTaskRemove(item.name)}
              />
            )}
            ListEmptyComponent={() => <EmptyComponent />}
          />
        </View>
      </View>
    </View>
  );
}
