import { useEffect, useState } from 'react';
import { Badge, Button, Form, Modal, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } from 'reduxFolder/employeeSlice';
import ImagePickerModal from '../ImagePickerModal';

export type Employee = {
    _id?: string;
    name: string;
    role: string;
    department: string;
    linkedin: string;
    level: number;
    joinedDate: string;
    photo: string;
    status: 'Active' | 'Inactive';
};

const Employees = () => {
    const dispatch: any = useDispatch();
    const { employees } = useSelector((state: any) => state.employeeState);

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    const [form, setForm] = useState<Omit<Employee, '_id'>>({
        name: '',
        role: '',
        department: '',
        linkedin: '',
        level: 1,
        joinedDate: new Date().toISOString().split('T')[0],
        photo: '',
        status: 'Active',
    });

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleAdd = () => {
        setIsEditing(false);
        setForm({
            name: '',
            role: '',
            department: '',
            linkedin: '',
            level: 3,
            joinedDate: new Date().toISOString().split('T')[0],
            photo: '',
            status: 'Active',
        });
        setShowModal(true);
    };

    const handleEdit = (emp: Employee) => {
        setIsEditing(true);
        setEditingEmployee(emp);
        setForm({
            name: emp.name,
            role: emp.role,
            department: emp.department,
            linkedin: emp.linkedin,
            level: emp.level,
            joinedDate: emp.joinedDate?.split('T')[0] || '',
            photo: emp.photo,
            status: emp.status,
        });
        setShowModal(true);
    };

    const handleDelete = (id?: string) => {
        if (!id) return;
        if (window.confirm('Are you sure to delete this employee?')) {
            dispatch(deleteEmployee(id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingEmployee?._id) {
            dispatch(updateEmployee({ id: editingEmployee._id, data: form }));
        } else {
            dispatch(addEmployee(form));
        }
        setShowModal(false);
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
                        .slice()
                        .sort((a: Employee, b: Employee) => a.level - b.level) // Optional: sort by level
                        .map((emp: Employee) => (
                            <tr key={emp._id}>
                                <td>
                                    <img
                                        src={emp.photo || 'https://via.placeholder.com/40'}
                                        alt="avatar"
                                        style={{ width: 80, height: 100, borderRadius: '50%', objectFit: 'contain' }}
                                    />
                                    <span className="ms-2">Lv {emp.level}</span>
                                </td>
                                <td>{emp.name}</td>
                                <td>{emp.role}</td>
                                <td>{emp.department}</td>
                                <td>
                                    <Form.Check
                                        type="switch"
                                        checked={emp.status === 'Active'}
                                        onChange={() =>
                                            dispatch(
                                                updateEmployee({
                                                    id: emp._id!,
                                                    data: {
                                                        ...emp,
                                                        status: emp.status === 'Active' ? 'Inactive' : 'Active',
                                                    },
                                                })
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
                                            onClick={() => handleDelete(emp._id)}>
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
                                <Button size="sm" onClick={() => setShowImagePicker(true)}>
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
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control
                                type="url"
                                value={form.linkedin}
                                onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Level</Form.Label>
                            <Form.Select
                                value={form.level}
                                onChange={(e) => setForm({ ...form, level: Number(e.target.value) })}>
                                <option value={1}>1 - Junior</option>
                                <option value={2}>2 - Mid</option>
                                <option value={3}>3 - Senior</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Join Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={form.joinedDate}
                                onChange={(e) => setForm({ ...form, joinedDate: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Check
                                label="Active"
                                checked={form.status === 'Active'}
                                onChange={(e) => setForm({ ...form, status: e.target.checked ? 'Active' : 'Inactive' })}
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

            <ImagePickerModal
                show={showImagePicker}
                folder="employees"
                onClose={() => setShowImagePicker(false)}
                onSelect={(url) => {
                    setForm((prev) => ({ ...prev, photo: url }));
                    setShowImagePicker(false);
                }}
            />
        </div>
    );
};

export default Employees;
