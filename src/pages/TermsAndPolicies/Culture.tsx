import { Container } from 'react-bootstrap';

const Culture = () => {
    return (
        <section className="py-7 position-relative bg-warning">
            <Container className="bg-white p-5 rounded shadow" style={{ maxWidth: '800px' }}>
                <h1 className="mb-4 text-center">Privacy Policy</h1>
                <p className="text-muted mb-5 text-center">Last updated: January 1, 2025</p>

                <h3>1. Introduction</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi scelerisque, erat sed
                    posuere suscipit, nisi urna tincidunt neque, nec posuere elit sapien nec massa.
                </p>

                <h3>2. Information We Collect</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>

                <h3>3. How We Use Your Information</h3>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>

                <h3>4. Sharing Your Information</h3>
                <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur?
                </p>

                <h3>5. Security</h3>
                <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                    consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>

                <h3>6. Changes to This Privacy Policy</h3>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident.
                </p>

                <h3>7. Contact Us</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you have any questions, please contact
                    us at <strong>support@example.com</strong>.
                </p>
            </Container>
        </section>
    );
};

export default Culture;
