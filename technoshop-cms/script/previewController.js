import { form, preview } from "./elems.js";
import { toBase64 } from "./utils.js";

export const showPreview = (src) => {
    preview.getElementsByClassName.display = 'block';
    preview.src = src;
};

export const previewController = () => {
    const imageFile = form.image;
    image.addEventListener('change', () => {
        if (imageFile.files.length) {
            toBase64(imageFile.files[0]).then(src => showPreview(src));

        }
    });

};

