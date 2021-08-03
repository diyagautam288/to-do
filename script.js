function App() {
  const [inputItem, setInputItem] = React.useState("");
  const [items, setItems] = React.useState([]);
  function handleChange(event)
  {
    const val = event.target.value;
    setInputItem(val);
  }
  function addItem()
  {
    setItems(preVal => {
      return [...preVal, inputItem];
    });
  }
  return /*#__PURE__*/React.createElement("div", { className: "container" }, /*#__PURE__*/
  React.createElement("div", { className: "heading" }, /*#__PURE__*/
  React.createElement("h1", null, "To-Do List")), /*#__PURE__*/

  React.createElement("div", { className: "form" }, /*#__PURE__*/
  React.createElement("input", { onChange: handleChange, type: "text", value: inputItem }), /*#__PURE__*/
  React.createElement("button", { onClick: addItem }, /*#__PURE__*/
  React.createElement("span", null, "Add"))), /*#__PURE__*/


  React.createElement("div", null, /*#__PURE__*/
  React.createElement("ul", null,
  items.map(item => {
    return /*#__PURE__*/React.createElement("li", null, item);
  }))));



}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));