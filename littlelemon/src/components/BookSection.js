import React, {useEffect} from "react";
import {  useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import DatePicker from "react-datepicker";

const BookSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();


  const formik = useFormik({
    initialValues: {
      name: '',
      people: '',
      date: '',
      time: '',
      email: '',
      phone: '',
      comment: '',
    },
    onSubmit: (values) => {
      submit("http://localhost:3000/", values);
     },
    validationSchema: Yup.object({
      name: Yup.string().required("Name Required"),
      people: Yup.number().required("Number of People Required"),
      email: Yup.string().email("Invalid Email Address").required("Email Required"),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required("Phone number Required"),
      comment: Yup.string().min(25, "Comment must be 25 characters or longer").required("Comment Required"),
    }),
    

  });

  // hook for responses

  useEffect(() => {
    if (response != null) {
      // console.log('Response received', response)
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    
    }
  }, [response])

  


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#269c7d"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="book-section">
          Book
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <HStack spacing={100}>
                <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    {...formik.getFieldProps('name')}
                    
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        
                </FormControl>

                <FormControl isInvalid={formik.touched.people && formik.errors.people}>
                  <FormLabel htmlFor="people">People</FormLabel>
                  <Input
                    id="people"
                    name="people"
                    onChange={formik.handleChange}
                    value={formik.values.people}
                    {...formik.getFieldProps('people')}
                    
                  />

                  <FormErrorMessage>{formik.errors.people}</FormErrorMessage>
        
                </FormControl>

              </HStack>

              {/* date and time */}


              <HStack spacing={100}>

                <FormControl>
                  <FormLabel htmlFor="date">Date</FormLabel>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="time">Time</FormLabel>
                  <Input
                    type="time"
                    id="time"
                    name="time"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time}
                  />
                </FormControl>

              </HStack>

              {/* email and phone */}

              <HStack spacing={100}>

                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    {...formik.getFieldProps('email')}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.phone && formik.errors.phone}>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    {...formik.getFieldProps('phone')}
                  />
                  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>

              </HStack>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Comments</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button aria-label="On Click" type="submit" colorScheme="blue" width="full" isLoading={isLoading} onSubmit={formik.onSubmit}>
                Book Now
              </Button>
              
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default BookSection;
