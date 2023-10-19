import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import AddProduct from "../../pages/AddProduct/AddProduct";
import ClothingCollection from "../../pages/ClothingCollection/ClothingCollection";
import ShoeShowcase from "../../pages/ShoeShowcase/ShoeShowcase";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import EyewearCollection from "../../pages/EyewearCollection/EyewearCollection";
import HomeKitchen from "../../pages/HomeKitchen/HomeKitchen";
import Electronics from "../../pages/Electornics/Electronics";
import GamingAccessories from "../../pages/GamingAccessories/GamingAccessories";
import MyCart from "../../pages/MyCart/MyCart";
import UpdateProduct from "../../pages/UpdateProduct/UpdateProduct";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Contact from "../../pages/Contact/Contact";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("https://diyafah-server.vercel.app/products")
            },
            {
                path: "/addProduct",
                element: <PrivateRoutes><AddProduct /></PrivateRoutes>
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoutes><UpdateProduct /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://diyafah-server.vercel.app/products/${params.id}`)
            },
            {
                path: "/clothingCollection",
                element: <ClothingCollection />,
                loader: () => fetch("https://diyafah-server.vercel.app/products"),
            },
            {
                path: "/shoeShowcase",
                element: <ShoeShowcase />,
                loader: () => fetch("https://diyafah-server.vercel.app/products"),
            },
            {
                path: "/eyewearCollection",
                element: <EyewearCollection />,
                loader: () => fetch("https://diyafah-server.vercel.app/products"),
            },
            {
                path: "/homeKitchen",
                element: <HomeKitchen />,
                loader: () => fetch("https://diyafah-server.vercel.app/products"),
            },
            {
                path: "/electronics",
                element: <Electronics />,
                loader: () => fetch("https://diyafah-server.vercel.app/products"),
            },
            {
                path: "/gamingAccessories",
                element: <GamingAccessories />,
                loader: () => fetch("https://diyafah-server.vercel.app/products"),
            },
            {
                path: "myCart",
                element: <PrivateRoutes><MyCart /></PrivateRoutes>,
                loader: () => fetch("https://diyafah-server.vercel.app/cart"),
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoutes><ProductDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://diyafah-server.vercel.app/products/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/contact",
                element: <Contact />
            }

        ]
    }
])

export default router;