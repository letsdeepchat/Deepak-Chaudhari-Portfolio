"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  fullname: z.string().min(2, { message: 'Full name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  message: z.string().min(10, { message: 'Message is too short.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      toast({
        title: 'Message Sent!',
        description: 'Thanks for reaching out, I will get back to you soon.',
      });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unknown error occurred.';
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <article className="rounded-2xl bg-card p-6 shadow-md md:p-8">
      <header>
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <div className="my-4 h-1 w-10 rounded-full bg-accent"></div>
      </header>

      <section className="mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.4281359303!2d77.50126431640624!3d12.953997400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe4!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700030641249!5m2!1sen!2sin"
          width="100%"
          height="300"
          className="w-full rounded-2xl border-0"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>

      <section>
        <h3 className="mb-6 text-xl font-medium text-foreground">Contact Form</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full name"
                        {...field}
                        className="rounded-lg bg-background p-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email address"
                        {...field}
                        className="rounded-lg bg-background p-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message"
                      {...field}
                      className="min-h-[120px] rounded-lg bg-background p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <Button type="submit" className="rounded-lg bg-accent px-6 py-3 text-accent-foreground hover:bg-accent/90" disabled={isSubmitting} >

              <Send className="mr-2 h-4 w-4" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </Button> */}
            <a
                href="https://wa.me/917895840255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="button"
                  className="rounded-lg bg-accent px-6 py-3 text-accent-foreground hover:bg-accent/90"
                >
                  Chat on WhatsApp
                </Button>
              </a>

          </form>
        </Form>
      </section>
    </article>
  );
}
