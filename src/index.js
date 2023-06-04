import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Stateprovider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Stateprovider>
);
