import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Playground,
	Home,
	PageNotFound,
	Descinder,
	Dot,
	OpenMarket,
	Boadman,
	Cashtella,
} from './pages';
import { ApplyLayout } from './layout';
import { APP_ROUTES } from './constants';
import { GlobalStyles, theme } from './base';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			<BrowserRouter>
				<Routes>
					{/* Playground page for developers */}
					{/* Not visible in production */}
					{process.env.NODE_ENV === 'development' && (
						<Route path={APP_ROUTES.playground} element={<Playground />} />
					)}

					{/* Pages that have their own default layout */}

					{/* Use default layout on theses pages */}
					<Route element={<ApplyLayout />}>
						<Route path={APP_ROUTES.home} element={<Home />} />
						<Route path={APP_ROUTES.descinder} element={<Descinder />} />
						<Route path={APP_ROUTES.boadman} element={<Boadman />} />
						<Route path={APP_ROUTES.cashtella} element={<Cashtella />} />
						<Route path={APP_ROUTES.dot} element={<Dot />} />
						<Route path={APP_ROUTES.openMarket} element={<OpenMarket />} />
					</Route>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>

			<ToastContainer
				limit={2}
				autoClose={3000}
				closeButton={false}
				position="top-center"
				hideProgressBar={true}
			/>
		</ThemeProvider>
	);
}

export default App;
