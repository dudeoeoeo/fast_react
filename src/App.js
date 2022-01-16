import { RecoilRoot } from 'recoil';
import './App.css';
import FontButton from './components/RecoilExample/FontButton';
import StyledComponentExample from './components/StyledComponents/StyledComponentExample';
import Text from './components/RecoilExample/Text';
import TodoList from './components/RecoilExample/TodoList';
import CurrentUserInfo from './components/RecoilExample/fetch/CurrentUserInfo';
import TestMocking from './components/mocks/TestMocking';
import Example from './components/ReactQueryExample/Example';
import { QueryClient, QueryClientProvider } from 'react-query';
import QuickStart from './components/ReactQueryExample/QuickStart';
import { ReactQueryDevtools } from 'react-query/devtools'
import Pagination from './components/ReactQueryExample/Pagination';
import InfiniteScroll from './components/ReactQueryExample/InfiniteScroll';

const queryClient = new QueryClient();

function App() {
  return (
    // <StyledComponentExample />
    // <RecoilRoot>
    //   <FontButton />
    //   <Text />
    //   <TodoList />
    //   <CurrentUserInfo />
    //   <TestMocking />
    // </RecoilRoot>'
    <QueryClientProvider client={queryClient}>
      <Example />
      <QuickStart />
      {/* <Pagination /> */}
      <InfiniteScroll />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;