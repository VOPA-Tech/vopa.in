import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export type ImageType = {
    src: string;
    caption: string;
};

type LightBoxProps = {
    images: ImageType[];
    photoIndex: number;
    closeLightbox: () => void;
    moveNext: () => void;
    movePrev: () => void;
};

const LightBox = ({ images, photoIndex, closeLightbox }: LightBoxProps) => {
    return (
        <Lightbox
            open={true}
            close={closeLightbox}
            index={photoIndex}
            slides={images.map((img) => ({
                src: img.src,
                description: img.caption,
            }))}
        />
    );
};

export { LightBox };
