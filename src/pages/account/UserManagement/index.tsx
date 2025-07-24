import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Button, Modal, Form } from 'react-bootstrap';

import { Navbar4 } from 'components/navbars';
import { Footer3 } from 'components/footer';
import { useLogin, useUser } from 'hooks/auth';
import { APICore } from 'helpers/api/apiCore';

import { fetchUsers } from 'reduxFolder/usersSlice';
import UserList from './UserList';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const [loggedInUser] = useUser();
    const dispatch = useDispatch();
    const api = new APICore();

    const { list, loading, error: fetchError } = useSelector((state: any) => state.usersState);

    const [showAddModal, setShowAddModal] = useState(false);
    const [newUser, setNewUser] = useState({ email: '', password: '', role: 'User' });

    useEffect(() => {
        (dispatch as any)(fetchUsers());
    }, [dispatch]);

    if (loggedInUser?.role === 'User') {
        return <Navigate to="/account/content" replace />;
    }
    const handleAddUser = async () => {
        try {
            await api.create('/auth/register', newUser);
            alert('User added successfully!');
            setShowAddModal(false);
            setNewUser({ email: '', password: '', role: 'User' });
            (dispatch as any)(fetchUsers());
        } catch (err) {
            alert('Failed to add user.');
        }
    };

    return (
        <>
            <Navbar4 fixedWidth />

            <section className="position-relative overflow-hidden bg-gradient2 py-3 px-3">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="page-title">
                                <h3 className="mb-0">{loggedInUser?.email}</h3>
                                <p className="mt-1 fw-medium">Welcome to VOPA!</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col lg={12} className="d-flex justify-content-end">
                            <Button variant="primary" onClick={() => setShowAddModal(true)}>
                                + Add User
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            {loading ? (
                                <p>Loading users...</p>
                            ) : fetchError ? (
                                <p>Error: {fetchError}</p>
                            ) : (
                                <UserList users={list} />
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Add User Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                value={newUser.role}
                                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            <Footer3 />
        </>
    );
};

export default Dashboard;
