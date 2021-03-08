import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import { COLORS } from "../styles/colors";
import { getData } from "../ducks/data";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.line3}>hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: 38,
    backgroundColor: COLORS.white,
  },
});

const mapStateToProps = (state) => ({
  datas: state.data.information,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
