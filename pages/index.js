import React, { useEffect, useState } from "react";
import Layouts from "../layouts/layouts";
import Home from "../components/pages/home/index";
import { getProduct } from "../store/actions/productAction";
import axios from "axios";
import { useDispatch } from "react-redux";
import Sidebar from "../components/common/sidebar";
const Index = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(data));
  });
  const [drawer, setDrawer] = useState(false);
  return (
    <Layouts>
      <Sidebar drawer={drawer} setDrawer={setDrawer} />
      <Home setDrawer={setDrawer} />
    </Layouts>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const { data } = await axios.get("https://assessment-edvora.herokuapp.com");
  return {
    props: {
      data,
    },
  };
};
