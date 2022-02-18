import React,{useState} from 'react';
import  './Header.css';
import toDoImage from '../../assets/todoimage.png';
import toDoIcon from '../../assets/todo icon.png';
import TaskSummary from '../TaskTracker/TaskSummary';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Header = ({ tasks }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
        <header className='header'>
            <h1>Task Tracker</h1>
                <div className='total-task'>
                <span><img className='img'src={toDoIcon} alt='To Do Icon'/></span>
                <span>Your Tasks</span>
                <span className='badge'>{tasks.length}</span></div>
        </header>
            <div className='main-image'>
            <img src={toDoImage} alt='To Do List'/>
            </div>
            <TaskSummary/>
            <div><Calendar className='calendar' onChange={onChange} value={value} /></div>
            </div>
  )
}

export default Header