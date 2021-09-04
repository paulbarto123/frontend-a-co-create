import React from "react";
import "../style.css";
import { Card, Divider, Row, Col } from "antd";

const Project = () => {
  return (
    <div className="card">
      <Card title="" bordered={true} style={({ width: 1000 }, { backgroundColor: "AliceBlue" })}>
        <Row>
          <Col span={5}>
            <h4>
              <b>Kategori Project</b>
            </h4>
            <p>Nama Project</p>
            <p>Tanggal Mulai</p>
            <p>Deskripsi Project</p>
            <p>Kollaborator</p>
          </Col>
          <Col span={19}>
            <h4>
              : <b>Sosial & Kebudayaan</b>
            </h4>
            <p>: Bangun Sekolah Gratis</p>
            <p>: 17 Juli 2021</p>
            <p>: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>
              : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </Col>
        </Row>
      </Card>
      <Divider />
      <Card title="" bordered={true} style={({ width: 1000 }, { backgroundColor: "AliceBlue" })}>
        <Row>
          <Col span={5}>
            <h4>
              <b>Kategori Project</b>
            </h4>
            <p>Nama Project</p>
            <p>Tanggal Mulai</p>
            <p>Deskripsi Project</p>
            <p>Kollaborator</p>
          </Col>
          <Col span={19}>
            <h4>
              : <b>Sosial & Kebudayaan</b>
            </h4>
            <p>: Bangun Sekolah Gratis</p>
            <p>: 17 Juli 2021</p>
            <p>: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>
              : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </Col>
        </Row>
      </Card>
      <Divider />
    </div>
  );
};
export default Project;
