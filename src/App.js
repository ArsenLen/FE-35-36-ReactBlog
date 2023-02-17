import './App.css';
import Greeting from './components/Greeting/Greeting';
import Header from './components/Header/Header';
import Content from './components/Content/Content'
import Total from './components/Total/Total';

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Frontend Pro",
      parts: [
        {
          id: 1,
          name: "Вводные занятия по React",
          tasks: 10
        },
        {
          id: 2,
          name: "Использование React хуков",
          tasks: 10
        },
        {
          id: 3,
          name: "Использование библиотеки react-router-dom",
          tasks: 10
        }
      ]
    }
  ]
  const course = "Frontend Pro"
  const part1 = "Вводные занятия по React"
  const tasks1 = 10
  const part2 = "Использование React хуков"
  const tasks2 = 5
  const part3 = "Использование библиотеки react-router-dom"
  const tasks3 = 15
  return (
    <div className="App">
      <Header course={course}  />
      <Content 
        part1={part1}
        tasks1={tasks1}
        part2={part2}
        tasks2={tasks2}
        part3={part3}
        tasks3={tasks3}
      />
      <Total total={tasks1 + tasks2 + tasks3} />
    </div>
  );
}

export default App;
/*
  Создать db.json, запустить его с помощью команды json-server.
  Предварительно заполнить файл db.json, создав коллекцию parts, в которой
  должны быть parts и tasks.
  Создать parts только для Frontend Course. 
  {
    parts: [
      {
        id: 1,
        part: "Вводные занятия по React"б
        task: 10,
        category: "Frontend"
      },
    ]
  } 
  После запуска сервера, запросить parts с помощью axios и отрисовать
  в UI
*/
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


// Сделать добавление нового курса
// 1. Создать форму добавления нового курса
// 2. Добавить поля, которые нужны для каждого документа в db.json
// 2.1 Создать объект, который вы хотите добавить в db.json
// 3. Отправить post запрос для добавления данных в db.json