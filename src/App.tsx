import { useState } from "react";
import { Router } from "./router/router";
import { Layout } from "./components/layout/layout";

function App() {
  const { pathname } = location;
  const [path, setPath] = useState(pathname);
  return (
    <Layout path={path} setPath={setPath}>
      <Router routePath={pathname} />
    </Layout>
  );
}

export default App;
