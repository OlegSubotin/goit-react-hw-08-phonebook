import {Suspense, lazy} from "react";
import { NavLink, Routes, Route } from 'react-router-dom';
import Loader from "components/Loader";
import s from './NotFoundView.module.css';

const HomeView = lazy(() => import('../HomeView'));

const NotFoundView = () => {
    return (
        <>
            <div className={s.wrapper}>
                <h2 className={s.title}>
                    Ooops! There is no oxygen...                
                </h2>
                <h3 className={s.afterTitle}>
                    We're fairly sure that the page used to be here, but seems to have gone missing.
                </h3>
                <NavLink className={s.link} to="/">
                    Go back to home page
                </NavLink>
            
            </div>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path='/' element={<HomeView />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default NotFoundView;