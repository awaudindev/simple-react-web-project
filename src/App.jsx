import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "@/routes";
import { Header } from "@/widgets/header";
import { Footerr } from "@/widgets/footer";
import './App.css'

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footerr />
    </>
  )
}

export default App
