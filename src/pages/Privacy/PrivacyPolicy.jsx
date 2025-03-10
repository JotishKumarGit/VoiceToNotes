import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <Container className="mt-5 mb-5 py-5 shadow-lg" style={{borderRadius:"20px"}}>
            <Row className="justify-content-center">
                <Col lg={8}>
                    <h1 className="text-center mb-4">Privacy Policy</h1>
                    <Card className="p-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>Introduction</Card.Title>
                            <Card.Text>
                                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
                            </Card.Text>

                            <Card.Title>Information We Collect</Card.Title>
                            <Card.Text>
                                We may collect personal information such as your name, email address, and any other details you provide when interacting with our website.
                            </Card.Text>

                            <Card.Title>How We Use Your Information</Card.Title>
                            <Card.Text>
                                The information collected is used to improve your browsing experience, provide customer support, and to comply with legal obligations.
                            </Card.Text>

                            <Card.Title>Cookies</Card.Title>
                            <Card.Text>
                                Our site uses cookies to personalize content, provide social media features, and analyze our traffic. You can manage your cookie settings in your browser.
                            </Card.Text>

                            <Card.Title>Third-Party Services</Card.Title>
                            <Card.Text>
                                We may employ third-party services for analytics and advertising. These services have their own privacy policies which govern their use of data.
                            </Card.Text>

                            <Card.Title>Your Rights</Card.Title>
                            <Card.Text>
                                You have the right to access, update, or delete your personal data. For any inquiries regarding your privacy or personal data, please contact us.
                            </Card.Text>

                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@example.com">contact@example.com</a>.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PrivacyPolicy;
