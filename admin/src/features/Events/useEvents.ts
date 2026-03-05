/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import {
  activateEventService,
  createEventService,
  deactivateEventService,
  deleteEventService,
  getEventService,
  updateMaxCapService,
} from "@/services/events";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";

const useEvents = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    data: eventData,
    isLoading: getEventLoading,
    refetch: eventRefetch,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => await getEventService(),
    onSuccess: (userData) => {
      if (userData?.success) {
        return userData.data;
      } else {
        toast({
          variant: "error",
          title: "Error",
          description: userData.message,
        });
      }
    },
    onError: (error) => {
      toast({
        variant: "error",
        title: "Error",
        description: "some error occured in fetch event mutation",
      });

      console.error(error);
    },
  });

  const { mutate: deleteEvent, isLoading: deleteLoading } = useMutation({
    mutationFn: async (code: string) => await deleteEventService(code),
    onSuccess: (userData) => {
      if (
        userData?.success &&
        userData?.message_code === "DELETE_EVENT_SUCCESS"
      ) {
        toast({
          variant: "success",
          title: "Success",
          description: userData.message,
        });
        queryClient.invalidateQueries({
          queryKey: [`events`],
        });
      } else {
        toast({
          variant: "error",
          title: "Error",
          description: userData.message,
        });
      }
    },

    onError: (error) => {
      toast({
        variant: "error",
        title: "Error",
        description: "some error occured in delete event mutation",
      });
      navigate("/login");
      console.error(error);
    },
  });
  const { mutate: createEvent, isLoading: createLoading } = useMutation({
    mutationFn: async (reqObj: any) => await createEventService(reqObj),
    onSuccess: (userData: any) => {
      if (
        userData?.success &&
        userData?.message_code === "CREATE_EVENT_SUCCESS"
      ) {
        toast({
          variant: "success",
          title: "Success",
          description: userData.message,
        });
        queryClient.invalidateQueries({
          queryKey: [`events`],
        });
      } else {
        toast({
          variant: "error",
          title: "Error",
          description: userData.message,
        });
      }
    },

    onError: (error) => {
      toast({
        variant: "error",
        title: "Error",
        description: "some error occured in create event mutation",
      });
      navigate("/login");
      console.error(error);
    },
  });
  const { mutate: activateEvent, isLoading: activateEventLoading } =
    useMutation({
      mutationFn: async (event_code: string) =>
        await activateEventService(event_code),
      onSuccess: (userData: any) => {
        if (
          userData?.success &&
          userData?.message_code === "ACTIVATE_EVENT_SUCCESS"
        ) {
          toast({
            variant: "success",
            title: "Success",
            description: userData.message,
          });
          queryClient.invalidateQueries({
            queryKey: [`events`],
          });
        } else {
          toast({
            variant: "error",
            title: "Error",
            description: userData.message,
          });
        }
      },

      onError: (error) => {
        toast({
          variant: "error",
          title: "Error",
          description: "some error occured in create event mutation",
        });
        navigate("/login");
        console.error(error);
      },
    });
  const { mutate: deactivateEvent, isLoading: deactivateEventLoading } =
    useMutation({
      mutationFn: async (event_code: string) =>
        await deactivateEventService(event_code),
      onSuccess: (userData: any) => {
        if (
          userData?.success &&
          userData?.message_code === "DEACTIVATE_EVENT_SUCCESS"
        ) {
          toast({
            variant: "success",
            title: "Success",
            description: userData.message,
          });
          queryClient.invalidateQueries({
            queryKey: [`events`],
          });
        } else {
          toast({
            variant: "error",
            title: "Error",
            description: userData.message,
          });
        }
      },

      onError: (error) => {
        toast({
          variant: "error",
          title: "Error",
          description: "some error occured in create event mutation",
        });
        navigate("/login");
        console.error(error);
      },
    });
  const { mutate: updateMaxCap, isLoading: updateMaxCapLoading } = useMutation({
    mutationFn: async (event_data:any) =>
      await updateMaxCapService(event_data.event_code, event_data.new_cap),
    onSuccess: (userData: any) => {
      if (
        userData?.success &&
        userData?.message_code === "UPDATE_MAX_CAP_SUCCESS"
      ) {
        toast({
          variant: "success",
          title: "Success",
          description: userData.message,
        });
        queryClient.invalidateQueries({
          queryKey: [`events`],
        });
      } else if (userData?.message_code === "NEW_CAP_LESS_THAN_REG_COUNT") {
        toast({
          variant: "error",
          title: "Error",
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
        description: "some error occured in create event mutation",
      });
      navigate("/login");
      console.error(error);
    },
  });

  return {
    eventData,
    getEventLoading,
    deleteEvent,
    eventRefetch,
    deleteLoading,
    createEvent,
    createLoading,
    activateEvent,
    activateEventLoading,
    deactivateEvent,
    deactivateEventLoading,
    updateMaxCap,
    updateMaxCapLoading,
  };
};

export default useEvents;
