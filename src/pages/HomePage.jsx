import React from "react";
import { Card, Typography, Image } from "antd";

const { Title } = Typography;

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: 400,
          textAlign: "center",
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/279748323_741476020191204_352788893656864596_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGniGLyWp3xZrP6Sq7OM8t_z-2P1D384ojP7Y_UPfziiBHM9aVMDPHAwduSJ7GUV65WdI7S0EypPrUg1TdshfrM&_nc_ohc=qQwvivzmb7oQ7kNvgEi7O5j&_nc_oc=AdkjPgGlmy7hhroS6VGgXoQDeVZA-bpmZlI_9ALsRKxTmZ4heh_c84aWgfSithJlFKI&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=xMowQE45Al8-yWT9TMj_FQ&oh=00_AYGea8CohCxIBAVbUDWwu8hZqNooQV7b0GRmQzMqpvAZEw&oe=67E579CA"
          alt="profile"
          width={150}
          height={150}
          style={{ borderRadius: "50%", objectFit: "cover", marginBottom: 10 }}
        />
        <Title level={2} style={{ color: "rgb(255 0 115)" }}>
          นาย อัสรอน ดอเลาะ
        </Title>
        <h4>
        รหัสนักศึกษา 6649010031
        </h4>
      </Card>
    </div>
  );
};

export default HomePage;
