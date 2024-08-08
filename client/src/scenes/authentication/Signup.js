import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import "../../styles/Signup.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/base";

const initialUser = { email: "", password: "", username: "" };
const Signup = () => {
    const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `${BASE_URL}/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          toast.success("Registered successfully. Please Login!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="sign-up">
        <div className="part-1">
          <div className="part1-overlay">
            <h2>WELCOME!</h2>
            <p>
              Sign up to <br />
              continue
            </p>
          </div>
        </div>
        <div className="part-2">
          <h3>Sign up</h3>
          <div className="form" data-aos="fade-right">
            <Row className="register">
              <Col sm="12" md={{ size: 4, offset: 4 }}>
                <div>
                  <FormGroup>
                    <Input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleUserChange}
                      placeholder="Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleUserChange}
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleUserChange}
                      placeholder="Password"
                    />
                  </FormGroup>
                  <Button color="primary" onClick={signUp}>
                    Sign up
                  </Button>
                </div>
              </Col>
            </Row>
            <p>or</p>
            <button>Sign up with google</button>
            <button>Sign up with facebook</button>
            <p>
              Already have an account? <Link to="/login">login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;