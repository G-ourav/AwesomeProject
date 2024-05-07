import { useState, useEffect } from "react";
import { setalert_ } from "../redux/login_state";
import { useDispatch, useSelector } from "react-redux";

function useGetForm(url) {
  const dispatch = useDispatch();
  const [get_form_data, setGet_form_data] = useState(null);
  const [Get_error, setGet_error] = useState(null);
  // const { user_token } = useSelector((state) => state.global);

  useEffect(() => {
    const token = localStorage.User_token_;

    const get_Form = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (!res.ok) {
          console.log("API is not working");
          throw new Error("Network response was not ok");
        }

        const get_res = await res.json();
        // console.log("Get User data Successfully");
        setGet_form_data(get_res.data);
        dispatch(setalert_({ message_: get_res.message, status_: get_res.status }));
      } catch (error) {
        setGet_error(error);
        console.error("An error occurred:", error);
      }
    };
    get_Form();
  }, [url]);

  return [get_form_data, Get_error];
}

export default useGetForm;
