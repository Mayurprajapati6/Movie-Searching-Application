import {Routes , Route} from 'react-router-dom'
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Error from '../pages/Error';

function MainRoutes() {
    return (
        <Routes>
            {/** Routes contains multiple Route */}
            <Route path='/' element={<Home/>} />
            <Route path='/Home/:name' element={<MovieDetails/>} />
            <Route path='*' element={<Error/> }/>
        </Routes>
    )
}

export default MainRoutes;