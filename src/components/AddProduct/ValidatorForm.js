

const validator = (input) => {
	const errors = {};
	if (!input.name) {
		errors.name = 'Please enter a name';
	}
  if (input.price < 1) {
		errors.price = 'Please enter a price';
	}
	if (!input.category) {
		errors.category = 'Please select a category';
	}
	if (!input.description) {
		errors.description = 'Please enter a product description';
	}
  if (!input.description) {
		errors.imageurl = 'Please select a image from your computer';
	}
	return errors;
};

export default validator;