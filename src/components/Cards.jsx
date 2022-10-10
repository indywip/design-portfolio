import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/projects';
import Card from './Card';

const Cards = () => {
  return (
      <Wrapper>
        {projects.map((project) =>
        <Card title={project.title} desc={project.desc} image={project.image} color={project.color} id={project.id} />)}
      </Wrapper>
  );
}

export default Cards

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0px 130px;
    margin-top: -34px;

    @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
`