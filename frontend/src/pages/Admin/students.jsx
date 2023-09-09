import React from "react";
import Layout from "../Admin/layout";
import Table from "../../components/admin/students/table";
import AddNew from "../../components/admin/students/newadd";
const Dashboard = () => {

    return (
      <Layout>
           <div className="w-full border px-10 my-5 flex-col flex justify-center">
               <div className="border w-full py-2 px-10 flex-col">
                  <div className="text-2xl ">Student Management Panel</div>
               </div>
               <div className="border w-full py-2 px-10 flex-col">
                    <Table />
               </div>
               <div className="border w-full py-2 px-10 flex-col">
                   <AddNew/>
               </div>
          </div>
      </Layout>
    );
  }
  
  export default Dashboard;
