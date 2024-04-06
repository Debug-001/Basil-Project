import { GoBell } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { TbMapStar } from "react-icons/tb";
import { TbBuildingWarehouse } from "react-icons/tb";
import { BsPersonLock } from "react-icons/bs";
import { CiForkAndKnife } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import  FormData  from '../components/FormData.tsx'

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-1 sidebar pt-3 d-flex justify-content-center">
                        <ul className="nav flex-column">
                            <div className="nav-icon mx-3">
                                <img src='img/nav-icon.png' alt="" />
                            </div>
                            <div className="sub-icons mt-4 pb-5">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><GoHome className="ricons" size={23} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><TbMapStar className="ricons" size={23} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#"><TbBuildingWarehouse className="ricons" size={23} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><BsPersonLock className="ricons" size={23} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><CiForkAndKnife className="ricons" size={23} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><IoNewspaperOutline className="ricons" size={23} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><BiSolidOffer className="ricons" size={23} /></a>
                                </li>
                                <li className="nav-item pt-5 mt-3">
                                    <a className="nav-link" href="#"><IoSettingsOutline className="ricons" size={23} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><MdLogout className="ricons" size={23} /></a>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="col top-nav mx-3">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <div className="top-header mx-2">
                                    <a
                                        className="navbar-brand h6"
                                        href="#"
                                    >
                                        <h1 className="h3 pt-3">
                                            All Orders
                                        </h1>
                                    </a>
                                    <a href="/orders">
                                    <p className="text-primary h6 font-weight-light">All Orders <span className="text-dark">/</span> Orders</p>
                                    </a>
                                </div>
                                <button
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    className="navbar-toggler"
                                    data-bs-target="#navbarSupportedContent"
                                    data-bs-toggle="collapse"
                                    type="button"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <div className="d-flex align-items-center right-group ms-auto">
                                        <form
                                            className="d-flex"
                                            role="search"
                                        >
                                            <input
                                                aria-label="Search"
                                                className="form-control me-2"
                                                placeholder="Search"
                                                type="search"
                                            />
                                            <div className="alert mx-4" >
                                                <div className="reddot"></div>
                                                <GoBell size={20} />
                                            </div>
                                        </form>
                                        <div className="p-icon">
                                            <img className="" src="./img/profile.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="mid-column d-flex align-items-center justify-content-between container-fluid p-0 mt-5">
                            <input
                                aria-label="Search"
                                className="form-control me-2 w-50 bg-light"
                                placeholder="Search"
                                type="search"
                            />
                            <div className="mid-col-logo pb-4 d-flex">
                                <div>
                                    <IoLogOutOutline className="pg-logo m-2" size={25} />
                                </div>
                                <div className="mx-4">
                                    <IoDocumentTextOutline className="pg-logo m-2" size={23} />
                                </div>
                            </div>
                        </div>
                        <FormData />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home