import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      // send data as json
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://0nx6rp84xd.execute-api.ap-south-1.amazonaws.com/prod/milan-survey",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      };
       await axios.request(config);
      toast({
        title: "Thank You!",
        description:
          "We are looking forward to sending you a specially crafted invitation for Milan soon.",
      });
    } catch (error) {
      toast({ title: "Success!", description: "Thankyou for your input!" });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col mx-10 lg:w-1/3 space-y-6 lg:mx-auto justify-center"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-red-400 text-[1rem]">Email</FormLabel>
              <FormControl>
                <Input placeholder="your-email@example.com" {...field} />
              </FormControl>
              <FormDescription className="text-white ">
                Enter Your Email For Personalised Invite!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"default"} className="w-[6rem] mx-auto">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default InputForm;
