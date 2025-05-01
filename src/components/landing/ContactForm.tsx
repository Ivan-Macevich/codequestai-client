'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '../ui/toaster';
import { motion } from 'framer-motion';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(5, 'Message must be at least 5 characters')
    .required('Message is required'),
});

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      resetForm();
    },
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <Toaster />

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          Have questions? We&apos;re here to help. Send us a message and
          we&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-md mx-auto space-y-8 bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-xl"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              type="text"
              id="name"
              {...formik.getFieldProps("name")}
              className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/70 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 [&:-webkit-autofill]:bg-white/70 [&:-webkit-autofill]:shadow-[0_0_0_30px_white_inset] [&:-webkit-autofill]:!text-gray-700 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              placeholder="John Doe"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/70 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 [&:-webkit-autofill]:bg-white/70 [&:-webkit-autofill]:shadow-[0_0_0_30px_white_inset] [&:-webkit-autofill]:!text-gray-700 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              placeholder="john@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              id="message"
              {...formik.getFieldProps("message")}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/70 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 resize-none ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              placeholder="Your message here..."
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </div>
            )}
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full py-3 text-base font-medium transition-all duration-200 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
    </section>
  );
};
