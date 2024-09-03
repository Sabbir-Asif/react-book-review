import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header/Header";

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="md:container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;