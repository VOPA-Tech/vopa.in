import { useState } from 'react';
import { Badge, Button, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

export type Employee = {
    id: number;
    name: string;
    role: string;
    department: string;
    photo: string;
    status: 'Active' | 'Inactive';
    priority: boolean;
};

const Employees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

    const [form, setForm] = useState<Omit<Employee, 'id'>>({
        name: '',
        role: '',
        department: '',
        photo: '',
        status: 'Active',
        priority: false,
    });

    const handleAdd = () => {
        setIsEditing(false);
        setForm({ name: '', role: '', department: '', photo: '', status: 'Active', priority: false });
        setShowModal(true);
    };

    const handleEdit = (emp: Employee) => {
        setIsEditing(true);
        setEditingEmployee(emp);
        setForm({
            name: emp.name,
            role: emp.role,
            department: emp.department,
            photo: emp.photo,
            status: emp.status,
            priority: emp.priority,
        });
        setShowModal(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure to delete this employee?')) {
            setEmployees((prev) => prev.filter((e) => e.id !== id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEmp: Employee = {
            id: isEditing && editingEmployee ? editingEmployee.id : Date.now(),
            ...form,
        };

        setEmployees((prev) => {
            if (isEditing && editingEmployee) {
                return prev.map((e) => (e.id === editingEmployee.id ? newEmp : e));
            }
            return [...prev, newEmp];
        });

        setShowModal(false);
    };

    const handleImageChoose = () => {
        const url = prompt('Enter image URL from your bucket:');
        if (url) setForm((prev) => ({ ...prev, photo: url }));
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Employees</h4>
                <Button onClick={handleAdd}>Add Employee</Button>
            </div>

            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees
                        .sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0))
                        .map((emp) => (
                            <tr key={emp.id}>
                                <td>
                                    <img
                                        src={emp.photo || 'https://via.placeholder.com/40'}
                                        alt="avatar"
                                        style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                    {emp.priority && (
                                        <Badge bg="warning" className="ms-2">
                                            Priority
                                        </Badge>
                                    )}
                                </td>
                                <td>{emp.name}</td>
                                <td>{emp.role}</td>
                                <td>{emp.department}</td>
                                <td>
                                    <Form.Check
                                        type="switch"
                                        checked={emp.status === 'Active'}
                                        onChange={() =>
                                            setEmployees((prev) =>
                                                prev.map((e) =>
                                                    e.id === emp.id
                                                        ? {
                                                              ...e,
                                                              status: e.status === 'Active' ? 'Inactive' : 'Active',
                                                          }
                                                        : e
                                                )
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            onClick={() => handleEdit(emp)}>
                                            <FeatherIcon icon="edit" size={16} />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="light"
                                            className="border"
                                            onClick={() => handleDelete(emp.id)}>
                                            <FeatherIcon icon="trash" size={16} className="text-danger" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo</Form.Label>
                            <div className="d-flex align-items-center gap-2">
                                <div
                                    className="position-relative"
                                    style={{ width: 60, height: 60, borderRadius: '50%', overflow: 'hidden' }}>
                                    <img
                                        src={form.photo || 'https://via.placeholder.com/60'}
                                        alt="avatar"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <Button size="sm" onClick={handleImageChoose}>
                                    Choose from Bucket
                                </Button>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                required
                                value={form.role}
                                onChange={(e) => setForm({ ...form, role: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                required
                                value={form.department}
                                onChange={(e) => setForm({ ...form, department: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Check
                                label="Priority"
                                checked={form.priority}
                                onChange={(e) => setForm({ ...form, priority: e.target.checked })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Check
                                label="Active"
                                checked={form.status === 'Active'}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        status: e.target.checked ? 'Active' : 'Inactive',
                                    })
                                }
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
};

export default Employees;
