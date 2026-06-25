import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { TopPage } from "./pages/TopPage";
import { ItemListPage } from "./pages/ItemListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="/item-list" element={<ItemListPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;