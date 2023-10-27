import { UserWidget } from "../UserWidget/UserWidget"

export const NavBar = () => {
    return (
        <nav className="d-flex justify-content-around p-4">
            <div>
                <button className="btn btn-succes mx-2">¿Quienes somos?</button>
                <button className="btn btn-succes mx-2">Nuestras acciones</button>
                <button className="btn btn-succes mx-2">Colabora con nosotros</button>
                <button className="btn btn-succes mx-2">Productos de nuestra tierra</button>

            </div>
            <div className="d-flex">
                <UserWidget />
                <p>25</p>
            </div>
            </nav>
            );
};
        
