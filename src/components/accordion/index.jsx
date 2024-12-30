import { use, useState } from "react";
import reactQuestions from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleClick(currentId) {
    setSelected((prevSelected) => {
        if (isEnabled) {
            let copyMultipleArr = [...multiple]
            copyMultipleArr.push(selected)
            const indexOfCurrentId = copyMultipleArr.indexOf(currentId)
            if (indexOfCurrentId === -1) {
                copyMultipleArr.push(currentId)
            } else {
                copyMultipleArr.splice(indexOfCurrentId, 1)
            }
            return setMultiple(copyMultipleArr)
      } else {
            setMultiple([])
        return prevSelected === currentId ? null : currentId;
      }
    });
    }
    console.log(isEnabled, multiple, selected)
  
  return (
    <div className="wrapper">
      <button onClick={() => setIsEnabled(!isEnabled)}>
        {isEnabled ? "enable single-selection" : "enable multi-selection"}
      </button>
      <div className="accordion">
        {reactQuestions && reactQuestions.length > 0 ? (
          reactQuestions.map((data) => (
            <div onClick={() => handleClick(data.id)} className="items">
              <div className="question">
                <h3>{data.question}</h3>
                <span>+</span>
              </div>
              <div className="answer">
                {selected === data.id || multiple.indexOf(data.id) !== -1 ? (
                  <div>
                    <p>{data.answer}</p>
                  </div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No item found</div>
        )}
      </div>
    </div>
  );
}
