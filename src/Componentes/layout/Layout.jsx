import React from "react";
import { Menu } from "../Menu";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return(
        <div>
                <Menu />
               
                <main>

                    <Outlet />

                </main>

              <footer>

                    <p>© 2025 </p>

              </footer>

        </div>

    )
}