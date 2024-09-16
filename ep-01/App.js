// const heading = React.createElement("h1", {}, "hello react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// prt-2
const heading = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", {id:"h1"}, "hello react"),
    React.createElement("h1", {id:"h2"}, "hello react")
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
