import React from "react";
import Layout from "../Admin/layout";


function Dashboard() {

  return (
    <Layout>
         <div className="w-full border px-10 my-5 flex-col flex justify-center">
             <div className="border w-full py-2 px-10 flex justify-evenly">
                <div className="border p-5 flex-col justify-center items-center rounded-lg drop-shadow-xl">
                    <div className="w-full text-lg  font-semibold">No. Instructors</div>
                    <div className="w-full flex text-3xl justify-center font-bold">23</div>
                </div>
                <div className="border p-5 flex-col justify-center items-center rounded-lg drop-shadow-xl">
                    <div className="w-full text-lg  font-semibold">No. Labrooms</div>
                    <div className="w-full flex text-3xl justify-center font-bold">15</div>
                </div>
                <div className="border p-5 flex-col justify-center items-center rounded-lg drop-shadow-xl">
                    <div className="w-full text-lg  font-semibold">No. Students</div>
                    <div className="w-full flex text-3xl justify-center font-bold">250</div>
                </div>
             </div>
        </div>
    </Layout>
  );
}

export default Dashboard;
