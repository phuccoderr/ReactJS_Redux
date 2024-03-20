import { Outlet, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SampleReactMemo from "./components/SampleReactMemo";
import AddProduct from "./components/AddProduct";
import { useMemo } from "react";

const addNewProduct = (product) => {
  console.log("name: " + product.name);
};

function App() {
  const loadingLargeData = useMemo(() => {
    console.log("Render loading Large Data");
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  const resultSum = loadingLargeData;
  return (
    <>
      <Header />
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <SampleReactMemo txt="number" /> {/*su dung memo*/}
      <AddProduct addNewProduct={addNewProduct} />
      <div>Demo Calculate Sum: {resultSum}</div>
      <Footer />
    </>
  );
}

export default App;
