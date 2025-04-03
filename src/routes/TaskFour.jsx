import MyButton from "../components/MyButton";

// Task Four Route

const TaskFour = () => {
  return (
    <div
      style={{
        paddingTop: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MyButton
        variant="primary"
        text="Primary Button"
        style={{ marginRight: "10px" }}
      />
      <MyButton variant="secondary" text="Secondary Button" />
    </div>
  );
};

export default TaskFour;
