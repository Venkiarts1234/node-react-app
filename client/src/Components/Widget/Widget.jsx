import "./widget.scss";

const Widget = ({ isCurrency = false, title, count, icon }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          {isCurrency && "£"} {count}
        </span>
      </div>
      <div className="right">{icon}</div>
    </div>
  );
};

export default Widget;
