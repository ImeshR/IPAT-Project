import React from 'react'
import Layout from "../Admin/layout";
import Table from "../../components/admin/labrooms/table";
import AddNew from "../../components/admin/labrooms/newadd";
const labroom = () => {
  return (
    <Layout>
           <div className="w-full border px-5 my-5 flex-col flex justify-center">
               <div className="border w-full py-2 px-10 flex-col">
                  <div className="text-2xl ">Labrrom Management Panel</div>
               </div>
               <div className="border w-full py-2 flex-col">
                  <Table/>
               </div>
               <div className="border w-full py-2 px-10 flex-col">
                   <AddNew/>
               </div>
          </div>
      </Layout>
  )
}

export default labroom
