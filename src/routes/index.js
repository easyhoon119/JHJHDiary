import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';

function RootRouter() {
    return (
        <Router>
            <Switch>
                {/* 기본 페이지 */}
                <Route path='/' key="main" >
                    <Main />
                </Route>

                {/* 추가페이지 */}

                {/* 경로가 유효하지 않을때 */}
            </Switch>
        </Router>
    );
}

export default RootRouter;



