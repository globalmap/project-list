import { projects } from "../../utils/projects";
import { Card, Row, Col, Tooltip } from "antd";


const List: React.FC = () => {
  return (
    <Row
      gutter={[24, 24]}
      justify='center'
      style={{ padding: "40px", backgroundColor: "#f0f2f5" }}>
      {projects.map((project, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <Tooltip title={project.descriptions} placement='top'>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.imgSrc}
                  style={{ height: 250, objectFit: "cover" }}
                />
              }>
              <Card.Meta title={project.title} />
            </Card>
          </Tooltip>
        </Col>
      ))}
    </Row>
  );
};

export default List;
