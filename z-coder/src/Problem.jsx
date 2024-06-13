import React, { useState } from 'react';
import Header1 from './Header1';
import InfoModal from './InfoModal';
import './assets/Problem.css';
import { NavLink } from 'react-router-dom';

const Problem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [problems, setProblems] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addProblem = (problem) => {
    setProblems([...problems, problem]);
  };

  return (
    <>
      <Header1 />
      <div className='side3'>
        <div className='sidebar1'>
          <nav className='preferences'>
            <h3 className='side1'>Platforms</h3>
            <ul>
              <li><a href="https://atcoder.jp/home" target="_blank" className='side2'>Atcoder</a></li>
              <li><a href="https://codeforces.com/problemset" target="_blank" className='side2'>Code Forces</a></li>
              <li><a href="https://www.codechef.com/practice" target="_blank" className='side2'>Code Chef</a></li>
              <li><a href="https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions" target="_blank" className='side2'>Geeks for Geeks</a></li>
              <li><a href="https://leetcode.com/problemset/" target="_blank" className='side2'>Leetcode</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <div className='side4'>
            <h1>Saved Problems</h1>
            <img
              src='https://img.icons8.com/?size=100&id=24717&format=png&color=000000'
              className='side5'
              alt="Add Information"
              onClick={openModal}
            />
          </div>
          <div className='bar'>
            <p>Sr. No.</p>
            <p>Problem Name</p>
            <p>Topic</p>
            <p>Solution</p>
            <p>Language</p>
          </div>
          <div className='bar2'>
            {problems.map((problem, index) => (
              <div className='bar1' key={index}>
                <p>{index + 1}</p>
                <NavLink to={problem.problemLink} target='blank' className='problem'>
                <p>{problem.name}</p>
                </NavLink>
                <p>{problem.topic}</p>
                <NavLink to={problem.solutionLink} target='blank'>
                <img src='https://img.icons8.com/?size=100&id=EFgvL6xJwQNa&format=png&color=000000' className='bar3'/>
                </NavLink>
                <p>{problem.language}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <InfoModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={addProblem} />
    </>
  );
};

export default Problem;
