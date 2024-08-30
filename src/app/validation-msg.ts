export const addBook_validation_messages = {
    'isbnNum': [
      { type: 'required', message: 'ISBN Number is required' },
      { type: 'minlength', message: 'ISBN Number must be at least 5 digits long' },
      { type: 'maxlength', message: 'ISBN Number cannot be more than 50 digits long' },
      { type: 'pattern', message: 'ISBN Number must contain only numbers' }
    ],
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name must be at least 5 characters long' },
      { type: 'maxlength', message: 'Name cannot be more than 50 characters long' },
      { type: 'pattern', message: 'Name must contain only letters and spaces' }
    ],
    'author': [
      { type: 'required', message: 'Author is required' },
      { type: 'maxlength', message: 'Author cannot be more than 50 characters long' },
      { type: 'pattern', message: 'Author must contain only letters and spaces' }
    ],
    'publication': [
      { type: 'required', message: 'Publication is required' },  
      { type: 'minlength', message: 'Publication must be at least 5 characters long' },
      { type: 'maxlength', message: 'Publication cannot be more than 50 characters long' },
      { type: 'pattern', message: 'Publication must contain only letters and spaces' }
    ],
    'details': [
      { type: 'required', message: 'Details is required' },
      { type: 'minlength', message: 'Details must be at least 5 characters long' },
      { type: 'maxlength', message: 'Details cannot be more than 250 characters long' },
      { type: 'pattern', message: 'Details can contain only letters, numbers, and spaces' }
    ],
    'qty': [
      { type: 'required', message: 'Quantity is required' },
      { type: 'minlength', message: 'Quantity must be at least 1 digit long' },
      { type: 'maxlength', message: 'Quantity cannot be more than 5 digits long' },
      { type: 'pattern', message: 'Quantity must contain only numbers' }
    ],
    'price': [
      { type: 'required', message: 'Price is required' }
    ],
    'branch': [
      { type: 'required', message: 'Branch is required' }
    ]
  };
  