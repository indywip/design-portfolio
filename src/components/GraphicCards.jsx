import React from 'react';
import styled from 'styled-components';
import { graphics } from '../data/graphics';
import DesignCard from './DesignCard';

const GraphicCards = () => {
  return (
      <Wrapper>
        {graphics.map((project) =>
        <DesignCard title={project.title} desc={project.desc} image={project.image} />)}
      </Wrapper>
  );
}

export default GraphicCards

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
`