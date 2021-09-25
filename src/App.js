import './App.css';
// import emojiList from './data/emojis.json';
// import Instruction from './components/Instruction';
import Instruction from './components/functional/instruction';
// import Instruction from './components/class/instruction';
import { emojis } from './utils/constants/emojis';
import Emojis from './components/functional/emojis';
const isLoggedIn = true;

const App = ()  => {
  const greeting = "greeting";
  const displayEmojiName = event => alert(event.target.id);
  return (
    <div className="container">
      <h1 id={greeting}>Emojis App</h1>
      <Instruction text='Click on an emoji to view the emoji name.' />
      {isLoggedIn && (
        <ul>
        {emojis.map(emoji => (
          <Emojis action={displayEmojiName} emoji={emoji}/>
        ))}
      </ul>
      )}
    </div>
  );
}

export default App;
