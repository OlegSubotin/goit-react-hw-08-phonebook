import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from "components/AppBar";
import Container from "components/Container";
import Loader from 'components/Loader';
import authOperations from 'redux/auth/auth-operations';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <>
            <Container>
                <AppBar />
                
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path='/' element={<HomeView />} />
                        <Route path='/register' element={<RegisterView />} />
                        <Route path='/login' element={<LoginView />} />
                        <Route path='/contacts' element={<ContactsView />} />
                        <Route path='*' element={<NotFoundView />} />
                    </Routes>
                </Suspense>
            </Container>
        </>
    );
};

export default App;


