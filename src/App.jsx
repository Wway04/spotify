import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { publicRoutes } from "./routes";
import MainLayout from "./layouts/MainLayout";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            console.log("🚀 ~ {publicRoutes.map ~ Page:", Page);
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.mainLayout ? (
                    <MainLayout>
                      <Page />
                    </MainLayout>
                  ) : (
                    <Page />
                  )
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
