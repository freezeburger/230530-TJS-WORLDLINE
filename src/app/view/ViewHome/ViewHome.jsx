import { useEffect, useState } from "react"
import { data, getData } from "../../core/service"
import MenuBar from "../../components/MenuBar/MenuBar.jsx";
import HeroImage from "../../components/HeroImage/HeroImage.jsx";
import FilterBar from "../../components/FilterBar/FilterBar.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import { Drawer, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import Navigation from "../../components/Navigation/NAvigation";

const ViewHomeLegacy = () => {
    const [products, setProducts] = useState(data);
    const handleClick = () => {
        getData().then(() => setProducts([...data]))
    }
    return (
        <>
            <MenuBar></MenuBar>
            <h1>ViewHome</h1>
            <button onClick={handleClick}>Load Products</button>
            <hr />
            {products.length > 0 || <h2>No products loaded</h2>}
            {
                products.length > 0 && (
                    <>
                        <h2>You have {products.length} products loaded</h2>
                        {
                            products.map(item => <div key={item.id}>{item.title}</div>)
                        }
                    </>
                )
            }
        </>
    )
}
const ViewHome = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const actionCart = () => {
        console.log("actionCart");
    }
    const actionMenu = () => {
        console.log("actionMenu");
        onOpen();
    }
    const actionFav = () => {
        console.log("actionFav");
    }
    const actionFilter = () => {
        console.log("actionFilter");
    }
    const [filterValue, setFilterValue] = useState("");
    const [products, setProducts] = useState(data);
    const filteredProducts = !filterValue ? products : products.filter(product => product.title.toLowerCase().includes(filterValue));

    useEffect(() => {
        getData().then(() => setProducts(prevProducts => [...data]))
    }, []);

    return (
        <div>
            <MenuBar actionCart={actionCart} actionMenu={actionMenu}> Products </MenuBar>
            {/*<HeroImage url="https://logos-world.net/wp-content/uploads/2021/10/Worldline-New-Logo.png"></HeroImage>*/}
            <HeroImage></HeroImage>
            <FilterBar actionFav={actionFav} actionFilter={actionFilter} value={filterValue} valueChange={setFilterValue}></FilterBar>
            {/*<FilterBar></FilterBar>*/}
            {/*<ProductListItem></ProductListItem>*/}
            <ProductList listProducts={filteredProducts}></ProductList>

            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <Navigation/>
                </DrawerContent>
            </Drawer>

        </div>
    )
}
export default ViewHome;