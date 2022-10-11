import React from 'react';
import styled from 'styled-components';
import { uidesign } from '../data/uidesign';
import DesignCard from './DesignCard';

const UICards = () => {
  return (
      <Wrapper>
        {uidesign.map((project) =>
        <DesignCard title={project.title} desc={project.desc} image={project.image} />)}
      </Wrapper>
  );
}

export default UICards

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