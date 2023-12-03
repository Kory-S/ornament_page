const selectAProduct = document.querySelector('#select_product');


const productPreview = document.querySelectorAll('.product');
const productDescription = document.querySelectorAll('.product_description')

productPreview.forEach((product, previewIndex) => {
    product.addEventListener('click', () => {
        const currentlyActiveProduct = document.querySelector('.active');
        currentlyActiveProduct.classList.remove('active');
        product.classList.add('active');

        productDescription.forEach((description, descriptionIndex) => {

            description.classList.add('hidden');
            if (previewIndex === descriptionIndex) {
                description.classList.remove('hidden');
            }
        })
    });
});