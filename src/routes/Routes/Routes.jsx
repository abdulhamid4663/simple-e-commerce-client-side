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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/addProduct",
                element: <AddProduct />
            },
            {
                path: "/clothingCollection",
                element: <ClothingCollection />,
                loader: () => fetch("http://localhost:5100/products"),
            },
            {
                path: "/shoeShowcase",
                element: <ShoeShowcase />,
                loader: () => fetch("http://localhost:5100/products"),
            },
            {
                path: "/eyewearCollection",
                element: <EyewearCollection />,
                loader: () => fetch("http://localhost:5100/products"),
            },
            {
                path: "/homeKitchen",
                element: <HomeKitchen />,
                loader: () => fetch("http://localhost:5100/products"),
            },
            {
                path: "/electronics",
                element: <Electronics />,
                loader: () => fetch("http://localhost:5100/products"),
            },
            {
                path: "/gamingAccessories",
                element: <GamingAccessories />,
                loader: () => fetch("http://localhost:5100/products"),
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:5100/products/${params.id}`)
            }
        ]
    }
])

export default router;