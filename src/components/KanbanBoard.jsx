import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const KanbanBoard = ({ tasks, nextStage, previousStage }) => {
  return (
    <>
        <div>
            <h2>Backlog</h2>
            <ul>
                {tasks.map(task => (
                    task.stage === 0 
                    && ( 
                        <li key={task.name}>
                            <span>{task.name}</span> 
                            <FaLongArrowAltRight onClick={() => nextStage(task)} />
                        </li>
                    ) 
                ))}
            </ul>
        </div>
        <div>
            <h2>To Do</h2>
            <ul>
                {tasks.map(task => (
                    task.stage === 1 
                    && (
                        <li key={task.name}>
                            <span>{task.name}</span>
                            <FaLongArrowAltLeft onClick={() => previousStage(task)} />
                            <FaLongArrowAltRight onClick={() => nextStage(task)} />
                        </li>
                    ) 
                ))}
            </ul>
        </div>
        <div>
            <h2>Ongoing</h2>
            <ul>
                {tasks.map(task => (
                    task.stage === 2 
                    && (
                        <li key={task.name}>
                            <span>{task.name}</span> 
                            <FaLongArrowAltLeft onClick={() => previousStage(task)} />
                            <FaLongArrowAltRight onClick={() => nextStage(task)} />
                        </li>
                    ) 
                ))}
            </ul>
        </div>
        <div>
            <h2>Done</h2>
            <ul>
                {tasks.map(task => (
                    task.stage === 3 
                    && (
                        <li key={task.name}>
                            <span>{task.name}</span> 
                            <FaLongArrowAltLeft onClick={() => previousStage(task)} />
                        </li>
                    )
                ))}
            </ul>
        </div>
    </>
  );
};

export default KanbanBoard;
