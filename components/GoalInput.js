import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState();

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "50%",
          }}
        >
          <Button
            title="CANCEL"
            color="red"
            onPress={() => {
              props.Cancel(enteredGoal);
              setEnteredGoal("");
            }}
            style={styles.button}
          />

          <Button
            title="ADD"
            onPress={() => {
              props.onAddGoal(enteredGoal);
              setEnteredGoal("");
            }}
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "#484848",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "40%",
  },
});
