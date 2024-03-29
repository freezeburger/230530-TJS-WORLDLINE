import MenuBar from "../../components/MenuBar/MenuBar.jsx";
import HeroImage from "../../components/HeroImage/HeroImage.jsx";

import { Drawer, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import Navigation from "../../components/Navigation/NAvigation.jsx";


const ViewSplash = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <MenuBar actionMenu={onOpen}  actionCart={() => false}> Welcome </MenuBar>
            <HeroImage></HeroImage>

            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <h1>Hey</h1>
                    <Navigation />
                </DrawerContent>
            </Drawer>

        </div>
    )
}
export default ViewSplash;