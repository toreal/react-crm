import * as React from "react";

const styles = {
  about: {
    paddingTop: "3em",
    display: "grid",
    justifyContent: "center",
  },
  title: {
    paddingTop: "50px",
    paddingBottom: "30px",
    textAlign: "center" as TODO,
    fontSize: "36px"
  },
  version: {
    display: "flex",
    justifyContent: "center" as TODO ,
    fontSize: "24px",
    color: "darkcyan",
  },
  desc: {
    padding: "0px 50px",
    fontSize: "20px"
  }
}


const AboutPage: React.FC = () => {
    return (
      <div style={styles.about}>
        <div style={styles.title}><b>關於</b></div>
        <div style={styles.version}> 客戶管理 Demo App 2.0.0</div>
        <div style={styles.desc}>
          <p>

          宏褔資能科技有限公司

          </p>
        </div>
      </div>
    );
  }


export default AboutPage;
