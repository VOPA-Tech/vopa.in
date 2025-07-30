import { APICore } from 'helpers/api/apiCore';
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const api = new APICore();

type User = {
    _id: string;
    email: string;
    role: string;
};

type Props = {
    users: User[];
};

const UserList = ({ users }: Props) => {
    const [editUser, setEditUser] = useState<User | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleEditClick = (user: User) => {
        setEditUser(user);
        setShowModal(true);
    };

    const handleDeleteClick = async (_id: string) => {
        const confirmed = window.confirm('Are you sure you want to delete this user?');
        if (!confirmed) return;

        try {
            await api.delete(`/users/${_id}`);
            alert('User deleted successfully!');
            window.location.reload();
        } catch (err) {
            alert('Failed to delete user.');
        }
    };

    const handleSave = async () => {
        if (!editUser) return;

        try {
            await api.update(`/users/${editUser._id}`, editUser);
            alert('User updated successfully!');
            setShowModal(false);
            window.location.reload();
        } catch (err) {
            alert('Failed to update user.');
        }
    };

    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                        <th style={{ width: '150px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u._id}>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                            <td>
                                <Button variant="warning" size="sm" onClick={() => handleEditClick(u)}>
                                    Edit
                                </Button>{' '}
                                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(u._id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="editEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={editUser?.email || ''}
                                onChange={(e) => setEditUser({ ...editUser!, email: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                value={editUser?.role}
                                onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserList;
