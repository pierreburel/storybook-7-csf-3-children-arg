import List from "./components/List";
import ListItem from "./components/ListItem";

function App() {
  return (
    <List count={2}>
      <ListItem isChecked label="Checked" />
      <ListItem label="Unchecked" />
    </List>
  );
}

export default App
