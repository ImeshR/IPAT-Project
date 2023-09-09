import React from "react";
import Layout from "../Admin/layout";
import Table from "../../components/admin/instructor/table"
;
function Dashboard() {

    return (
      <Layout>
           <div className="w-full border px-10 my-5 flex-col flex justify-center">
               <div className="border w-full py-2 px-10 flex-col">
                  <div className="text-2xl ">Instructor Management Panel</div>
               </div>
               <div className="border w-full py-2 px-10 flex-col">
                  <Table/>
               </div>
               <div className="border w-full py-2 px-10 flex-col">
                  
               </div>
          </div>
      </Layout>
    );
  }
  
  export default Dashboard;
