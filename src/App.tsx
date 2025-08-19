import { css } from "../styled-system/css";

function App() {
  return (
    <>
      <div
        className={css({
          minHeight: "100vh",
          backgroundColor: "brand.400",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <div
          className={css({
            width: 400,
            height: 400,
            bg: "brand.200",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 15px",
          })}
        >
          <h1
            className={css({
              fontWeight: "bold",
              color: "brand.800",
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
