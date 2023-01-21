import './App.css';
import Greeting from './components/Greeting/Greeting';
import Header from './components/Header/Header';

const App = () => {
  const course = "Frontend Pro"
  const part1 = "Вводные занятия по React"
  const tasks1 = 10
  const part2 = "Использование React хуков"
  const tasks2 = 5
  const part3 = "Использование библиотеки react-router-dom"
  const tasks3 = 15
  return (
    <div className="App">
      <Header course={course} />
      <p>
        {part1} {tasks1}
      </p>
      <p>
        {part2} {tasks2}
      </p>
      <p>
        {part3} {tasks3}
      </p>
      <p>Общее количество задач: 'N' - сюда вывести общее число тасков</p>
    </div>
  );
}

export default App;
// Состояние - данные, с которыми работает и от которых зависит компонент
/*
const App = () => {
  const course = "Frontend Pro"
  const part1 = "Вводные занятия по React"
  const tasks1 = 10
  const part2 = "Использование React хуков"
  const tasks2 = 5
  const part3 = "Использование библиотеки react-router-dom"
  const tasks3 = 15
    return (
      <div className="App">
          <Header course={course} />
          <Content ... />
          <Total ... /> 
      </div>
    );
}

const Content = () => {
  return (
    <div>
      <Part ... />
      <Part ... />
      <Part ... />
    </div>
  )
}
*/