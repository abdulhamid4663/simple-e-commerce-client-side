import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import AddProduct from "../../pages/AddProduct/AddProduct";
import ClothingCollection from "../../pages/ClothingCollection/ClothingCollection";
import ShoeShowcase from "../../pages/ShoeShowcase/ShoeShowcase";

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
            }
        ]
    }
])

export default router;