import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import data from './componet/data';

function Reviews() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const { name, job, image, text } = data[index];

    const checkNumber = (number) => {
        if (number > data.length - 1) return 0;
        if (number < 0) return data.length - 1;
        return number;
    };

    const nextHandler = () => {
        setDirection(1);
        setIndex((prevIndex) => checkNumber(prevIndex + 1));
    };

    const prevHandler = () => {
        setDirection(-1);
        setIndex((prevIndex) => checkNumber(prevIndex - 1));
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * data.length);
        if (randomNumber === index) randomNumber = index + 1;
        setDirection(1);
        setIndex(checkNumber(randomNumber));
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.4 },
        },
        exit: (dir) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
            transition: { duration: 0.4 },
        }),
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setIndex(prev => checkNumber(prev + 1));
        }, 5000); 

        return () => clearInterval(timer); 
    }, [index]);


    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100 ">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={10} md={6} lg={4}>
                    <div className="position-relative bg-light p-2 infoTitle" style={{ minHeight: '450px' }}>
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="text-center"
                            >
                                <div className="review-img mb-3">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="rounded-circle"
                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    />
                                </div>
                                <h4 className="author text-dark">{name}</h4>
                                <p className="job text-secondary mb-2">{job}</p>
                                <p className="info text-muted">{text}</p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="review-button">
                            <button className="button-82-pushable" onClick={prevHandler}>
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text"><FaChevronLeft /></span>
                            </button>

                            <button className="button-82-pushable mx-2" onClick={randomPerson}>
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text">random</span>
                            </button>

                            <button className="button-82-pushable" onClick={nextHandler}>
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text"><FaChevronRight /></span>
                            </button>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Reviews;
