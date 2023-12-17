import React from "react"
import "../styles/RentModal.css"

const RentModal = ({children, visible, setVisible}) => {

  const rootClasses = ["rentModal"]

  if(visible) {
    rootClasses.push("active")
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className="rentModalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
};

export default RentModal;
