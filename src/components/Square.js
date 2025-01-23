import React, { useState } from "react";

export default function Square({value}) {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }

  return (
    <>
    <div className={styles.Wrapper}>
      <button className={styles.sqrBtn} onClick={handleClick}>
        {value}
      </button>
    </div>
    </>
  );
}
