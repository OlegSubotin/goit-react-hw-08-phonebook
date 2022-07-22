import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from "components/AppBar";
import Container from "components/Container";
import Loader from 'components/Loader';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));


function App() {
    const dispatch = useDispatch();
    const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return isFetchingCurrentUser ? <Loader /> : (
        <>
            <Container>
                <AppBar />
                
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route
                            path="/contacts"
                            element={
                                <PrivateRoute>
                                    <ContactsView />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <PublicRoute restricted>
                                    <LoginView />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <PublicRoute restricted>
                                    <RegisterView />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <PublicRoute restricted>
                                    <NotFoundView />
                                </PublicRoute>
                            }
                        />
                    </Routes>
                </Suspense>
            </Container>
        </>
    );
};

export default App;

















// import { lazy, Suspense, useEffect } from 'react';//
// import { Routes, Route } from 'react-router-dom';//
// import { useDispatch, useSelector } from 'react-redux';//

// import AppBar from "components/AppBar";
// import Container from "components/Container";
// import Loader from 'components/Loader';
// import authOperations from 'redux/auth/auth-operations';//
// import authSelectors from 'redux/auth/auth-selectors';//

// const HomeView = lazy(() => import('./views/HomeView'));
// const RegisterView = lazy(() => import('./views/RegisterView'));
// const LoginView = lazy(() => import('./views/LoginView'));
// const ContactsView = lazy(() => import('./views/ContactsView'));
// const NotFoundView = lazy(() => import('./views/NotFoundView'));


// function App() {
//     const dispatch = useDispatch();
//     const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser());

//     useEffect(() => {
//         dispatch(authOperations.fetchCurrentUser());
//     }, [dispatch]);

//     return isFetchingCurrentUser ? <Loader /> : (
//         <>
//             <Container>
//                 <AppBar />
                
//                 <Suspense fallback={<Loader />}>
//                     <Routes>
//                         <Route path='/' element={<HomeView />} />
//                         <Route path='/register' element={<RegisterView />} />
//                         <Route path='/login' element={<LoginView />} />
//                         <Route path='/contacts' element={<ContactsView />} />
//                         <Route path='*' element={<NotFoundView />} />
//                     </Routes>
//                 </Suspense>
//             </Container>
//         </>
//     );
// };

// export default App;


