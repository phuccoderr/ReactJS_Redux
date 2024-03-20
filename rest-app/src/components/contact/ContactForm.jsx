import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

function ContactForm() {
  const schema = yup
    .object({
      phone: yup.number().positive().integer().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)});
  const onSubmit = (e) => {
    return console.log(e);
  };
  console.log(errors);

  return (
    <>
      <h2 className={styles.title}>Contact Us</h2>
      <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group
            as={Col}
            sm={{ span: 6 }}
            className="mb-3 "
            controlId="contact-name"
          >
            <Form.Control
              {...register("name", { required: "this is required" })}
              type="text"
              placeholder="Your name"
            />
            <p className={styles.invalidFeedBack}>{errors?.name?.message}</p>
          </Form.Group>
          <Form.Group
            as={Col}
            sm={{ span: 6 }}
            className="mb-3 "
            controlId="contact-phone"
          >
            <Form.Control
              {...register("phone")}
              type="number"
              placeholder="Your phone"
            />
          </Form.Group>
          <p className={styles.invalidFeedBack}>{errors.phone?.message}</p>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            sm={{ span: 6 }}
            className="mb-3 "
            controlId="contact-email"
          >
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Your email"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            sm={{ span: 6 }}
            className="mb-3 "
            controlId="contact-subject"
          >
            <Form.Control
              {...register("subject")}
              type="text"
              placeholder="Your subject"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group controlId="contact-message">
            <Form.Control
              {...register("message")}
              as="textarea"
              rows={3}
              placeholder="Your message"
            />
          </Form.Group>
        </Row>
        <div className="mt-2">
          <Button type="submit" size="md" variant="outline-secondary">
            Save
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ContactForm;
