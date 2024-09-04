# JavaScript Data Handling Functions

This repository contains a set of JavaScript functions designed to handle and process a dataset of individuals. The functions provide various operations, including retrieving emails, hobbies, and student names, as well as handling edge cases.

## Dataset
The dataset used for these functions is defined in `person.js` and includes an array of objects where each object represents an individual with the following properties:

- `id`: Unique identifier
- `name`: Name of the individual
- `age`: Age of the individual
- `email`: Email address of the individual
- `city`: City where the individual resides
- `country`: Country where the individual resides
- `hobbies`: Array of hobbies
- `isStudent`: Boolean indicating if the individual is a student

## Functions
### `getAllEmails(arr)`
- **Description:** Returns an array of email addresses of all individuals in the dataset.
- **Parameters:**
  - `arr`: Array of individual objects.
- **Returns:** Array of email addresses.

### `getHobbyByAge(arr, age)`
- **Description:** Retrieves and returns the hobbies of individuals with the specified age.
- **Parameters:**
  - `arr`: Array of individual objects.
  - `age`: The age to search for.
- **Returns:** Array of hobbies or a message if no matching age is found.

### `getStudentName(arr, live)`
- **Description:** Retrieves and returns the name of the individual who is a student and lives in the specified country.
- **Parameters:**
  - `arr`: Array of individual objects.
  - `live`: The country to search for.
- **Returns:** Name of the individual or a message if no matching student is found.

### `getNameAndCityByIndex(arr, index)`
- **Description:** Retrieves and returns the name and city of the individual at the specified index position.
- **Parameters:**
  - `arr`: Array of individual objects.
  - `index`: The index position to search for.
- **Returns:** Object with name and city or a message if the index is out of bounds or data is not found.

### `getAllAges(arr)`
- **Description:** Logs the ages of all individuals in the dataset.
- **Parameters:**
  - `arr`: Array of individual objects.
- **Returns:** None (logs result to console).

### `getFirstHobby(arr)`
- **Description:** Retrieves and logs the first hobby of each individual in the dataset.
- **Parameters:**
  - `arr`: Array of individual objects.
- **Returns:** None (logs result to console).

### `getNameAndEmailByAge(arr, age)`
- **Description:** Retrieves and logs the name and email address of the individual with the specified age.
- **Parameters:**
  - `arr`: Array of individual objects.
  - `age`: The age to search for.
- **Returns:** None (logs result to console).

### `getAllCityAndCountry(arr)`
- **Description:** Logs the city and country of each individual in the dataset.
- **Parameters:**
  - `arr`: Array of individual objects.
- **Returns:** None (logs result to console).

## Usage
1. Clone the repository.
2. Ensure you have Node.js installed.
3. Run the test file using Node.js:

```bash 
	node test.js

this will execute the test cases defined in test.js and log the results to the console.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements or additional features.
