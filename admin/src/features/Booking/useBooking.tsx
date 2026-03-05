/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@/components/ui/use-toast";
import { bookingsByEmailService, deleteUserService, userByEmailService } from "@/services/bookings";

import { useMutation } from "react-query";
import { useNavigate } from "react-router";

function useBooking() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate: bookingsByEmail, isLoading: bookingsByEmailLoading ,data:bookingsByEmailData} =
    useMutation({
      mutationFn: async (email: string) => await bookingsByEmailService(email),
      onSuccess: (userData: any) => {
        if (!userData?.success) {
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
  const { mutate: userDetailByEmail, isLoading: userDetailByEmailLoading ,data:userDetailByEmailData} =
    useMutation({
      mutationFn: async (email: string) => await userByEmailService(email),
      onSuccess: (userData: any) => {
        if (!userData?.success) {
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
  const { mutate: deleteUser, isLoading: deleteUserLoading } =
    useMutation({
      mutationFn: async (user_id: string) => await deleteUserService(user_id),
      onSuccess: (userData: any) => {
        if (userData?.success && userData?.message_code === "DELETE_SUCCESS") {
          toast({
            variant: "success",
            title: "success",
            description: userData.message,
          });
        }
        else{
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
    bookingsByEmail,
    bookingsByEmailLoading,
    bookingsByEmailData,
    userDetailByEmail,
    userDetailByEmailLoading,
    userDetailByEmailData,
    deleteUser,
    deleteUserLoading
  };
}

export default useBooking;
