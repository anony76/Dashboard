/* packages import */
import React, { useState } from "react";

/* Components import */
import { GenericTable, SideMenu } from "../../components";

/* Layouts import */
import { DashboardLayout } from "../../layout";

/* Style import */
import "./Dashboard.scss";

/* Utils import */
import { MenuItem } from "../../utils";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(!open);
  };
  return (
    <DashboardLayout setOpen={setOpen} open={open}>
      <div className="Dashboard">
        {open && (
          <div className="Dashboard--SideMenu">
            <SideMenu
              MenuItem={MenuItem}
              isOpen={open}
              handleDrawerClose={handleDrawerClose}
            />
          </div>
        )}
        <div className="Dashboard--Table">
          <GenericTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
