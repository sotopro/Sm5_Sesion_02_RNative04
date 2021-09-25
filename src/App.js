import './App.css';
// import emojiList from './data/emojis.json';
// import Instruction from './components/Instruction';
import Instruction from './components/functional/instruction';
// import Instruction from './components/class/instruction';
import { emojis } from './utils/constants/emojis';
const isLoggedIn = true;

const App = ()  => {
  const greeting = "greeting";
  const displayEmojiName = event => alert(event.target.id);
  return (
    <div className="container">
      <h1 id={greeting}>Hello World</h1>
      <Instruction text='Click on an emoji to view the emoji name.' />
      {isLoggedIn && (
        <ul>
        {emojis.map(emoji => (
          <li>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.value}</span>
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default App;
