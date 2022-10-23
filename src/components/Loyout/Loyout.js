import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';



export const Loyout = () => {
    return (<>
        <AppBar />
        
        <Outlet/>
    </>);
}