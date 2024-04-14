import React from 'react';


function Grid({ children, rows = 4, cols = 4 }) {
  const baseSize = '1fr ';
  const style = {
    display: 'grid',
    gridTemplateColumns: baseSize.repeat(cols).trim(),
    gridTemplateRows: baseSize.repeat(rows).trim(),
    gridGap: '0.5rem'
  }

  return <section style={style}>
    {children}
  </section>
}

export default Grid;
