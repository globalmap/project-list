import { AppstoreOutlined } from "@ant-design/icons";
import List from "./components/List/List";
import { Typography } from "antd";

const { Title } = Typography;

function App() {
  return (
    <>
      <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
        <AppstoreOutlined style={{ marginRight: 10 }} />
        Example Projects
      </Title>
      <List />
    </>
  );
}

export default App
