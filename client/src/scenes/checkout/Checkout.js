import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from "../../utils/base";
import { KEY } from "../../utils/key";
import axios from "axios";
// import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51Mf522BMldolGarEcUn4XsmcdjUPvz1gu2P3ATld3jnNeNKdAIFuxdeg9f6Zk1o4V29f8D11Ns7g8dwuzyzp1beP00t9lQLIFv"
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  
  const form = useRef();
  const navigate = useNavigate();

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    // this copies the billing address onto shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
      console.log(values.billingAddress)
      actions.setTouched({});
      console.log(values.billingAddress.firstName)
      console.log(values.email)

      let orderName = [values.billingAddress.firstName, values.billingAddress.lastName].join(" ");
      let orderAddress = [values.billingAddress.street1, values.billingAddress.street2,values.billingAddress.city,values.billingAddress.state, values.billingAddress.country,values.billingAddress.zipcode,].join(" ");
      let orderQuantity = cart.map(({ id, count }) => ({
        id,
        count,
      }));

      console.log(orderQuantity)
      const ordered = async () => {
        try {
          const url = `${BASE_URL}/api/orderlists/`;
          const headers = { Authorization:`Bearer ${KEY}` };
          const res = await axios.post(
            url,
            {
              data: {
                name:  orderName,
                address: orderAddress,
                email: values.email,
                phone: values.phoneNumber,
                quantity:cart.map(({ id, count }) => ({
                  id,
                  count,
                }))
              },
            },
            { headers }

          );
          if (!!res) {
            console.log("Order Successuful");
          }
        } catch (error) {
          console.log("There are some errors in submitting orders");
        }
      };

      

      const sendHandler = () => {

        const templateParams = {
          email: values.email,
          name: orderName,
          address:orderAddress,
          phone: values.phoneNumber,
          quantity: orderQuantity[0].count
          
        };

        emailjs
        .send(
        "service_5mi1ko8",
        "template_oz3fwkb",
        templateParams,
        "MzjPpyVMBYVOizxZf"
        )
        .then(
          (result) => {
              console.log(result.text);
              console.log("Email Sent successfully!")
              // toast.success("Email Sent successfully!", {
              // hideProgressBar: true,
              // });
          },
          (error) => {
              console.log(error.text);
              console.log("There is a problem in Sending Email")
          }
        );
      }
  
      ordered();
      sendHandler();

        
    }
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: values.firstName,
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };


    const response = await fetch(`${BASE_URL}/api/orders/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEY}`
          },
      body: JSON.stringify(requestBody),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    console.log(requestBody)
    navigate("/checkout/success")
    

  }

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form ref={form} onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap="1rem" className="shop-button">
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: "#041E42",
                    color: "white",
                    borderRadius: "5px",
                    minWidth: "50%",
                    padding: "20px 40px",
                    m: "20px 0",
                    '&:hover': {
                      backgroundColor: 'green',
                    },
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: "#D1683B",
                    color: "white",
                    borderRadius: "5px",
                    minWidth: "50%",
                    padding: "20px 40px",
                    m: "20px 0",
                    '&:hover': {
                      backgroundColor: '#BC4123',
                    },
                  }}
                >
                  {!isSecondStep ? "Next" : "Place Order"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export default Checkout;