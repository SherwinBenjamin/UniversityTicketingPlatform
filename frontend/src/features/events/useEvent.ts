/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useToast } from "@/components/ui/use-toast";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  getEventByUserService,
  registerForEventService,
} from "@/services/events";
import { IRegisterForEvent } from "@/Interface/events";
import useUser from "../authentication/useUser";
function useEvent() {
  // const queryClient = useQueryClient();
  const [eventCode, setEventCode] = React.useState<any>([]);
  const navigate = useNavigate();
  const { user } = useUser();
  const { toast } = useToast();
  const { mutate: registerForEvent, isPending: registerForEventLoading } =
    useMutation({
      mutationFn: async (reqObj: IRegisterForEvent) =>
        await registerForEventService(reqObj),
      onSuccess: (userData: any) => {
        if (
          userData?.success &&
          userData?.message_code === "REGISTER_SUCCESS"
        ) {
          toast({
            variant: "success",
            title: "Success",
            description: userData.message,
          });
        } else {
          toast({
            variant: "error",
            title: "Error",
            description: userData.message,
          });
        }
      },

      onError: (error: any) => {
        toast({
          variant: "error",
          title: "Error",
          description: "some error occured while registering for event",
        });
        navigate("/");
        console.error(error);
      },
    });

    
  const { mutate: eventCodeOfUser, isPending: eventCodeOfUserLoading } =
    useMutation({
      mutationKey: ["eventCodeOfUser"],
      mutationFn: async () => {
        const user_id = user.id;
        return await getEventByUserService(user_id);
      },
      onSuccess: (userData: any) => {
        if (
          userData?.success &&
          userData?.message_code === "FETCH_EVENT_CODE_SUCCESS"
        ) {
          setEventCode(userData.data.eventCode);
        }
      }

      // onError: (error: any) => {
      //   toast({
      //     variant: "error",
      //     title: "Errosr",
      //     description: "some error occured ",
      //   });
      //   console.error(error);
      // },
    });

  // const { data: eventCodeOfUserData, isPending: eventCodeOfUserLoading , refetch:eventCodeOfUserRefetch} = useQuery(
  //   {
  //     queryKey: ["eventCodeOfUser"],
  //     queryFn: async () => {
  //       const user_id = user.id;
  //        await getEventByUserService(user_id);
  //     },
  //   }
  // );

  return {
    registerForEvent,
    registerForEventLoading,
    eventCodeOfUser,
    eventCodeOfUserLoading,
    eventCode,
    // eventCodeOfUserData,
    // eventCodeOfUserRefetch
  };
}

export default useEvent;
