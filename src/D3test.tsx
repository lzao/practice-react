import { select } from 'd3';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.svg`
  background-color: grey;
`;
const data = [25, 30, 45, 60, 20];

function D3test() {
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => enter.append('circle'),
        (update) => update.attr('class', 'updated'),
        (exit) => exit.remove(),
      );
  }, []);
  return (
    <>
      <Wrapper ref={svgRef}>{}</Wrapper>
    </>
  );
}

export default D3test;
