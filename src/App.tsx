import {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from '@components/Layout/Layout.tsx'
import {SearchLazy} from './pages/Search/SearchLazy.tsx'
import {FavoritesLazy} from './pages/Favorites/FavoritesLazy.tsx'
import {LoginLazy} from './pages/Login/LoginLazy.tsx'
import {NotFoundLazy} from './pages/NotFound/NotFoundLazy.tsx'

import cls from './App.module.scss'

const App = () => {
    return (
        <div className={cls.app}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<SearchLazy/>}/>
                        <Route path={'/favorites'} element={<FavoritesLazy/>}/>
                        <Route path={'/login'} element={<LoginLazy/>}/>
                        <Route path={'*'} element={<NotFoundLazy/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App