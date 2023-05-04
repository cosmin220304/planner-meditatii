import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./Home/index"
import SignUp from './Sign-up';

export default function App()
{
    return (
        <Router>
            <Routes>
                <Route path='/home'>
                    <Home></Home>
                </Route>
                <Route path='/sign-up'>
                    <SignUp></SignUp>
                </Route>
            </Routes>
        </Router>
        );
}
