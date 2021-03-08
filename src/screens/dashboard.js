import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Switch,
  Picker,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import { common } from "../styles/common";
import { getData, postData } from "../ducks/data";
import { COLORS } from "../styles/colors";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      picker: "default",
      name: null,
      description: null,
    };
    this.renderItem = this.renderItem.bind(this);
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  renderItem(row) {
    const { item, index } = row;

    return (
      <View style={styles.flatListContainer}>
        <Text style={styles.flatListTextHeader}>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  }

  componentDidMount() {
    this.props.getData();
  }

  toggleSwitch() {
    if (this.state.picker == "post") {
      this.setState({
        switch: !this.state.switch,
      });
    } else {
      Alert.alert("Please select post option");
    }
  }

  render() {
    return (
      <View style={common.container}>
        <Picker
          selectedValue={this.state.picker}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ picker: itemValue })
          }
        >
          <Picker.Item label="SELECT AN OPTION" value="default" />
          <Picker.Item label="GET RESULT" value="show" />
          <Picker.Item label="POST RESULT" value="post" />
        </Picker>
        <View style={styles.switchContainer}>
          <Text>SHOW INPUT FIELDS</Text>
          <Switch
            trackColor={{ false: COLORS.light_grey, true: COLORS.blue }}
            thumbColor={this.state.switch ? COLORS.white : COLORS.white}
            ios_backgroundColor={COLORS.grey}
            onValueChange={this.toggleSwitch}
            value={this.state.switch}
          />
        </View>
        {this.state.picker == "show" && (
          <FlatList
            data={this.props.datas.data}
            renderItem={(row) => this.renderItem(row)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `${item}${index}`}
          />
        )}
        {this.state.switch && (
          <>
            <TextInput
              style={styles.inputField}
              placeholder="Enter name here"
              value={this.state.name}
              onChangeText={(text) => {
                this.setState({ name: text });
              }}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Enter decritpion here"
              value={this.state.description}
              onChangeText={(text) => {
                this.setState({ description: text });
              }}
            />
            <TouchableOpacity
              style={styles.submitContainer}
              onPress={this.props.postData(
                this.state.name,
                this.state.description
              )}
            >
              <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.grey,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  flatListTextHeader: {
    fontSize: 20,
    alignSelf: "center",
    color: COLORS.maroon,
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    width: "80%",
  },
  switchContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  inputField: {
    marginTop: 5,
    width: "80%",
    borderBottomWidth: 2,
  },
  submitText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  submitContainer: {
    backgroundColor: COLORS.blue,
    width: "70%",
    marginTop: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
});

const mapStateToProps = (state) => ({
  datas: state.data.information,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    postData: (name, description) => dispatch(postData(name, description))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
