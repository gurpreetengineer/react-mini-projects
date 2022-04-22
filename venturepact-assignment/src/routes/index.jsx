import { React, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import { HomePage, ShowNotesPage, ErrorPage} from '../components';
import { useSelector } from "react-redux";

const CustomRoutes = () => {
  const isUserLoggedIn = useSelector((state) => state?.loginer?.login);

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {isUserLoggedIn ? (
            <Fragment>
              <Route path="/show-notes" element={<ShowNotesPage />} />
            </Fragment>
          ) : ( <Fragment>
            <Route path="/show-notes" element={<ErrorPage />} />
          </Fragment>)}
        </Routes>
      </Router>
    </Fragment>
  )
}

export default CustomRoutes



