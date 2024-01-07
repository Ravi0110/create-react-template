import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./Layout";
import './config/axios'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
