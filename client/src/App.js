import UserContext from "./components/AccountContext";
import ToggleColorMode from "./components/ToggleColorMode";
import Views from "./components/Views";
import PageLinks from "./components/PageLinks";

function App() {
  return (
    <UserContext>
      <PageLinks />
      <Views />
      <ToggleColorMode />
    </UserContext>
  );
}

export default App;