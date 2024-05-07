import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './header';

const BasicInfo = () => {
  // const dispatch = useDispatch();
  // const role = useSelector((state) => state.global.role);
  // const setting_role = useSelector((state) => state.setting_role);
  // const [get_form_data, Get_error] = useGetForm("ur_pro/BInD");

  // console.log(get_form_data, Get_error);
  // useEffect(() => {
  //   function get_data() {
  //     if (get_form_data) {
  //       dispatch(setBasic_data(get_form_data));
  //     }
  //   }
  //   get_data();
  // }, [get_form_data]);

  // const carr1 = [
  //   { key: "Name", value: get_form_data?.name || "-NA-" },
  //   { key: "Email", value: get_form_data?.email_address || "-NA-" },
  //   { key: "Date of Hiring", value: get_form_data?.user_hiredate?.split("T")[0] || "-NA-" },
  //   { key: "Title", value: get_form_data?.user_position || "-NA-" },
  //   { key: "Employee ID", value: get_form_data?.user_code || "-NA-" },
  // ];
  return (
    <View>
      <View style={Styles.container}>
        <Header title={'Basic Information'} edit_url={'/chat'} />
        <View style={[Styles.line_, {backgroundColor: '#858585'}]}>
          <Text style={Styles.key_}>sdfgsdfg</Text>
          <Text style={Styles.value_}>sfdgsdf</Text>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    borderRadius: 10,
    padding: 5,
  },
  line_: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    // backgroundColor: '#858585',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  key_: {
    fontSize: 20,
    color: '#292929',
  },
  value_: {
    fontSize: 20,
    color: '#292929',
  },
});

export default BasicInfo;
