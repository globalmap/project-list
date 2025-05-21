import React, { useState } from "react";
import { projects, type Project } from "../../utils/projects";
import { Card, Row, Col, Typography, Modal, Button, Divider, Tag } from "antd";
import { LinkOutlined, PlayCircleOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;

const List: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Row gutter={[24, 24]} justify='center'>
        {projects.map((project) => (
          <Col
            key={project.id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ minWidth: 340 }}>
            <Card
              hoverable
              onClick={() => handleOpen(project)}
              cover={
                <img
                  alt={project.title}
                  src={project.imgSrc}
                  style={{ height: 220, objectFit: "cover" }}
                />
              }>
              <Card.Meta
                title={project.title}
                description={
                  <Text type='secondary'>{project.descriptions}</Text>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        open={isModalVisible}
        onCancel={handleClose}
        title={selectedProject?.title}
        footer={[
          selectedProject?.link && (
            <Button
              key='visit'
              type='primary'
              href={selectedProject.link}
              target='_blank'
              icon={<LinkOutlined />}>
              Visit Site
            </Button>
          ),
          // selectedProject?.repo && (
          //   <Button
          //     key='repo'
          //     href={selectedProject.repo}
          //     target='_blank'
          //     icon={<GithubOutlined />}>
          //     GitHub
          //   </Button>
          // ),
          <Button key='close' onClick={handleClose}>
            Close
          </Button>,
        ]}
        width={800}>
        {selectedProject && (
          <>
            <img
              src={selectedProject.imgSrc}
              alt={selectedProject.title}
              style={{
                width: "100%",
                maxHeight: 300,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 20,
              }}
            />

            <Paragraph>{selectedProject.descriptions}</Paragraph>

            <Divider orientation='left'>📌 Основна інформація</Divider>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Text strong>Категорія:</Text> {selectedProject.category}
              </Col>
              {selectedProject.client && (
                <Col span={12}>
                  <Text strong>Клієнт:</Text> {selectedProject.client}
                </Col>
              )}
              <Col span={12}>
                <Text strong>Статус:</Text>{" "}
                <Tag
                  color={
                    selectedProject.status === "active"
                      ? "green"
                      : selectedProject.status === "inProgress"
                      ? "orange"
                      : "red"
                  }>
                  {selectedProject.status}
                </Tag>
              </Col>
              <Col span={12}>
                <Text strong>Тривалість:</Text> {selectedProject.duration}
              </Col>
              <Col span={12}>
                <Text strong>Команда:</Text> {selectedProject.teamSize} людей
              </Col>
              <Col span={12}>
                <Text strong>Дата старту:</Text> {selectedProject.date}
              </Col>
            </Row>

            <Divider orientation='left'>💡 Технології</Divider>
            <div>
              {selectedProject.technologies &&
                selectedProject.technologies.map((tech, i) => (
                  <Tag color='geekblue' key={i}>
                    {tech}
                  </Tag>
                ))}
            </div>

            <Divider orientation='left'>🏷️ Теги</Divider>
            <div>
              {selectedProject.tags &&
                selectedProject.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
            </div>

            {selectedProject.testimonials &&
              selectedProject.testimonials.length > 0 && (
                <>
                  <Divider orientation='left'>🗣 Відгуки</Divider>
                  {selectedProject.testimonials.map((t, i) => (
                    <Paragraph key={i} italic>
                      “{t.quote}” — <Text strong>{t.name}</Text>
                    </Paragraph>
                  ))}
                </>
              )}

            {selectedProject.videoDemoUrl && (
              <>
                <Divider orientation='left'>🎬 Відео демо</Divider>
                <Button
                  type='dashed'
                  icon={<PlayCircleOutlined />}
                  href={selectedProject.videoDemoUrl}
                  target='_blank'>
                  Переглянути відео
                </Button>
              </>
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default List;
