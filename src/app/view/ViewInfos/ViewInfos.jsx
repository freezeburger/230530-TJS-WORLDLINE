import MenuBar from "../../components/MenuBar/MenuBar.jsx";
import HeroImage from "../../components/HeroImage/HeroImage.jsx";

import { Drawer, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import Navigation from "../../components/Navigation/NAvigation.jsx";


const ViewInfos = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <MenuBar actionMenu={onOpen} actionCart={() => false}> Infos </MenuBar>
            <HeroImage></HeroImage>

            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <Navigation />
                </DrawerContent>
            </Drawer>

        </div>
    )
}
export default ViewInfos;