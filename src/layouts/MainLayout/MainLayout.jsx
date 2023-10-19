import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
    return (
        <div>
            <HelmetProvider>
                <Header />
                <Outlet />
                <Footer />
            </HelmetProvider>

        </div>
    );
};

export default MainLayout;