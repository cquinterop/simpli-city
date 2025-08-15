import { css } from "../styled-system/css";

function App() {

  return (
    <>
      <div
        className={css({
          minHeight: "100vh",
          backgroundColor: "blue.100",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <div
          className={css({
            width: 400,
            height: 400,
            bg: "blue.200",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "3xl",
            padding: "10px 15px",
          })}
        >
          <h1
            className={css({
              fontSize: "3xl",
              fontWeight: "bold",
              color: "blue.800",
            })}
          >
            Hello Panda CSS
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
