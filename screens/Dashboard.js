import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { connect } from 'react-redux'
import axios from 'axios'

const Dashboard = ({ user, token }) => {
   const [tasks, setTasks] = React.useState([]);
  
  const fetchData = async (authToken) => {
    const apiUrl = 'http://test.ecoforest.green/api/v1/todo/get-todos/';
      try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.data.status === 'success') {
        setTasks([...response.data.todos])
        return response.data.todos;
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  }
  React.useEffect(() => {
    fetchData(token)
  }, [])
async function postTodo(authToken, task) {
  const apiUrl = 'http://test.ecoforest.green/api/v1/todo/add-todo';
  console.log(authToken, task)

  try {
    const response = await axios.post(apiUrl, { ...task }, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (response.data.status === "success") {
      return response.data;
    } else {
      console.log(response.data)
      return null;
    }
  } catch (error) {
    console.log(error.response.data)
    console.error('Error posting todo:', error);
    return null;
  }
}

  const addNewTask = () => {
    Alert.prompt(
      "Add a New Task",
      "Enter the task description:",
      async (text) => {
        if (text) {
          console.log(text)
          const newTask = { task: text, completed: false };
          await postTodo(token, newTask)
          setTasks([newTask, ...tasks]);
        }
      }
    );
  };

  async function updateTodoStatus(todoId, completed, authToken) {
    const apiUrl = `http://test.ecoforest.green/api/v1/todo/${todoId}/completed/${completed}`;

    try {
      const response = await axios.put(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      })
      
      if (response.data.success === "success") {
        return response.data;
      } else {
        console.error(`Request failed with status code ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error('Error updating todo status:', error);
      return null;
  }
}
  const toggleTaskCompletion = async (taskId, completed) => {
    await updateTodoStatus(taskId, !completed, token)
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const renderChecklist = () => {
    return tasks.map((task) => (
      <TouchableOpacity
        key={task.id}
        style={styles.taskParent}
        onPress={() => toggleTaskCompletion(task.id, task.completed, token)}
      >
        <View style={[styles.checkbox, task.completed && styles.checkedCheckbox]} />
        <Text style={[styles.taskText, task.completed && styles.completedTaskText]}>
          {task.task}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.dashboard}>
      <View style={styles.frame}>
        <View style={styles.frameChild} />
        <Image
          style={styles.shapeIcon}
          contentFit="contain"
          source={require("../assets/shape.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="contain"
          source={require("../assets/ellipse-479.png")}
        />
        <Text style={styles.welcomeMary}>Welcome Mary!</Text>
      </View>
      <Image
        style={styles.dashboardChild}
        contentFit="contain"
        source={require("../assets/group-162.png")}
      />
      <Text style={styles.tasksList}>Tasks List</Text>
      <View style={styles.frameParent}>
        <View style={styles.frame1}>
          <Text style={styles.dailyTasks}>Daily Tasks</Text>
          <TouchableOpacity onPress={addNewTask}>
          <Image
            style={styles.plusCircleIcon}
            contentFit="cover"
            source={require("../assets/plus-circle.png")}
          />
          </TouchableOpacity>
        </View>
          <View style={styles.frame2}>{renderChecklist()}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tasksList: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    alignSelf: "flex-start",
    padding: 25,
    overflow: 'scroll'
  },
  dashboardChild: {
    height: 150,
    aspectRatio: 1,
    alignSelf: "center",
    marginTop: 10
  },
  frame: {
  width: "100%",
  aspectRatio: 1,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: Color.colorMediumturquoise_100, // Apply background color here
  },
  
frameChild: {
  width: "80%",
  aspectRatio: 1,
  backgroundColor: Color.colorMediumturquoise_100, // Apply background color here
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},
  shapeIcon: {
    height: 180,
    width: 200,
    top: -60,
    left: -60,
    position: "absolute",
  },
  frameItem: {
    top: '47%',
    width: 150,
    height: 150,
    aspectRatio: 1,
    position: "absolute"
  },
  welcomeMary: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    color: Color.colorWhite,
    alignSelf: "center",
  },
  frameParent: {
    width: "90%",
    aspectRatio: 4 / 4,
    backgroundColor: Color.colorWhite,
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginTop: 20,
    padding: 10
  },
  goVisitMum: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    opacity: 0.9,
    alignSelf: "flex-start",
  },
  frameInner: {
    backgroundColor: Color.colorWhite,
  },
  goVisitMumBy4pmParent: {
    width: "50%",
    aspectRatio: 8.17,
  },
  dailyTasks: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    opacity: 0.9,
    alignSelf: "flex-start",
  },
  plusCircleIcon: {
    width: 20,
    height: 20,
    alignSelf: "flex-end",
    padding: 10
  },
  frame1: {
    aspectRatio: 10 / 1.15,
  },
  frame2: {
    aspectRatio: 10 / 6.25,
  },
  taskParent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  taskText: {
    flex: 1,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    alignSelf: "flex-start",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    marginRight: 10,
  },
  dashboard: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
  },
   checkedCheckbox: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
    marginRight: 10, 
  },

  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray', 
  },
});

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  }
};

export default connect(mapStateToProps)(Dashboard);
