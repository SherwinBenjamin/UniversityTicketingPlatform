/* eslint-disable @typescript-eslint/no-explicit-any */

import useStaff from "@/features/Staffs/useStaff";
import { Skeleton } from "@/components/ui/skeleton";
import VerificationTable from "@/components/staffs/VerificationTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryClient } from "react-query";
// import { RefreshCcwIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

function StaffVerification() {
  const queryClient = useQueryClient();

  const {
    adminData,
    adminLoading,
    scannerData,
    scannerLoading,
    convenorData,
    convenorLoading,
	viewerData,
	viewerLoading
  } = useStaff();

  const handleScannerRefresh = () => {
    queryClient.invalidateQueries("scanners");
  };

  const handleConvenorRefresh = () => {
    queryClient.invalidateQueries("convenors");
  };

  const handleAdminRefresh = () => {
    queryClient.invalidateQueries("admins");
  };
  const handleViewerRefresh = () => {
    queryClient.invalidateQueries("viewers");
  };

  return (
    <div className="">
    
      <div className="staffVerificationContent px-[5rem] ">
        <h2 className="pt-2  text-blue-700 font-[montserrat] font-black text-[2.5rem]  tracking-tight">
          Verification
        </h2>

        <Tabs defaultValue="scanner" className="w-full mt-[30px]">
          <TabsList>
            <TabsTrigger
              defaultChecked
              value="scanner"
              className="text-white text-[1.5rem] font-[montserrat] font-bold  "
              onClick={handleScannerRefresh}
            >
              Scanner
            </TabsTrigger>
            <TabsTrigger
              value="convenor"
              className="text-white text-[1.5rem] font-[montserrat] font-bold  "
              onClick={handleConvenorRefresh}
            >
              Convenor
            </TabsTrigger>
            <TabsTrigger
              value="viewer"
              className="text-white text-[1.5rem] font-[montserrat] font-bold  "
              onClick={handleViewerRefresh}
            >
              Viewer{" "}
            </TabsTrigger>
            <TabsTrigger
              value="admin"
              className="text-white text-[1.5rem] font-[montserrat] font-bold  "
              onClick={handleAdminRefresh}
            >
              Admin
            </TabsTrigger>
          </TabsList>
          <TabsContent value="scanner">
            <div>
              {/* {scannerData && (
                <h1 className="text-white text-[1.5rem] font-[montserrat] font-bold  ">
                  {" "}
                  Scanner
                </h1>
              )} */}
              {/* <div>
                <Button className="bg-blue-700 mx-1 rounded-[0.3rem] mt-[10px] ">
                  <RefreshCcwIcon className=" text-white my-[20px]  " />
                </Button>
              </div> */}
              <div>
                {scannerLoading ? (
                  <div>
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                  </div>
                ) : scannerData?.data && scannerData.data.length > 0 ? (
                  <VerificationTable data={scannerData.data} type={"scanner"} />
                ) : (
                  <h1 className="text-center text-white/50 text-[1.5rem] font-bold font-[montserrat] mt-[50px] ">
                    {" "}
                    No Request Pending
                  </h1>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="convenor">
            <div>
              {/* {convenorData && (
                <h1 className="text-white text-[1.5rem] font-[montserrat] font-bold  ">
                  {" "}
                  Convenor
                </h1>
              )} */}
              {/* <div>
                <Button className="bg-blue-700 mx-1 rounded-[0.3rem] mt-[10px] ">
                  <RefreshCcwIcon className=" text-white my-[20px]  " />
                </Button>
              </div> */}
              <div>
                {convenorLoading ? (
                  <div>
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                  </div>
                ) : convenorData?.data && convenorData.data.length > 0 ? (
                  <VerificationTable data={convenorData.data} type={"convenor"} />
                ) : (
                  <h1 className="text-center text-white/50 text-[1.5rem] font-bold font-[montserrat] mt-[50px] ">
                    {" "}
                    No Request Pending
                  </h1>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="viewer">
            <div>
              {/* {convenorData && (
                <h1 className="text-white text-[1.5rem] font-[montserrat] font-bold  ">
                  {" "}
                  Convenor
                </h1>
              )} */}
              {/* <div>
                <Button className="bg-blue-700 mx-1 rounded-[0.3rem] mt-[10px] ">
                  <RefreshCcwIcon className=" text-white my-[20px]  " />
                </Button>
              </div> */}
              <div>
                {viewerLoading ? (
                  <div>
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                  </div>
                ) : viewerData?.data && viewerData.data.length > 0 ? (
                  <VerificationTable data={viewerData.data} type={"viewer"} />
                ) : (
                  <h1 className="text-center text-white/50 text-[1.5rem] font-bold font-[montserrat] mt-[50px] ">
                    {" "}
                    No Request Pending
                  </h1>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="admin">
            <div>
              {/* {adminData && (
                <h1 className="text-white text-[1.5rem] font-[montserrat] font-bold  ">
                  {" "}
                  Admin
                </h1>
              )} */}
              {/* <div>
                <Button className="bg-blue-700 mx-1 rounded-[0.3rem] mt-[10px] ">
                  <RefreshCcwIcon className=" text-white my-[20px]  " />
                </Button>
              </div> */}
              <div>
                {adminLoading ? (
                  <div>
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                    <Skeleton className="w-full h-[35px] bg-white/10 rounded-[0.5rem]  my-2" />
                  </div>
                ) : adminData?.data && adminData.data.length > 0 ? (
                  <VerificationTable data={adminData.data} type={"admin"} />
                ) : (
                  <h1 className="text-center text-white/50 text-[1.5rem] font-bold font-[montserrat] mt-[50px] ">
                    {" "}
                    No Request Pending
                  </h1>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default StaffVerification;
