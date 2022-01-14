import { RecoilRoot } from 'recoil';
import './App.css';
import FontButton from './components/RecoilExample/FontButton';
import StyledComponentExample from './components/StyledComponents/StyledComponentExample';
import Text from './components/RecoilExample/Text';
import TodoList from './components/RecoilExample/TodoList';
import CurrentUserInfo from './components/RecoilExample/fetch/CurrentUserInfo';

function App() {
  return (
    // <StyledComponentExample />
    <RecoilRoot>
      <FontButton />
      <Text />
      <TodoList />
      <CurrentUserInfo />
    </RecoilRoot>
  );
}

export default App;