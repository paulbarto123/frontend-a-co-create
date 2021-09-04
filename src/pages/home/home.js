import React from "react";
import { Radio } from "antd";
import { Col, Row, Divider } from "antd";
import "../style.css";

const Home = () => {
  return (
    <div className="artikel">
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Artikel</Radio.Button>
        <Radio.Button value="b">Project</Radio.Button>
      </Radio.Group>
      <Divider />
      <Row>
        <Col span={5}>
          <img src="https://pbs.twimg.com/profile_images/1260578013558816768/rpc_t-vc_400x400.jpg" alt="thumb" />
        </Col>
        <Col span={19}>
          <h3>
            <b>Kisah Inpiratif Kak Ghufron Berbagi Bubur</b>
          </h3>
          <h4>
            <span className="date">2019</span> <span className="kategori">Sosial & Kebudayaan</span>
          </h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col span={5}>
          <img src="https://pbs.twimg.com/profile_images/1260578013558816768/rpc_t-vc_400x400.jpg" alt="thumb" />
        </Col>
        <Col span={19}>
          <h3>
            <b>Kisah Inpiratif Kak Ghufron Berbagi Bubur</b>
          </h3>
          <h4>
            <span className="date">2019</span> <span className="kategori">Sosial & Kebudayaan</span>
          </h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col span={5}>
          <img src="https://pbs.twimg.com/profile_images/1260578013558816768/rpc_t-vc_400x400.jpg" alt="thumb" />
        </Col>
        <Col span={19}>
          <h3>
            <b>Kisah Inpiratif Kak Ghufron Berbagi Bubur</b>
          </h3>
          <h4>
            <span className="date">2019</span> <span className="kategori">Sosial & Kebudayaan</span>
          </h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default Home;
