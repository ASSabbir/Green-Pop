
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Nav/Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;